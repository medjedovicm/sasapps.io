---
title: SASjs Server on Cloud VPS
date: 2022-07-18T09:00:00.000Z
layout: POST
path: /sasjs-server-on-vps
description: A complete guide to Installation & Configuration of SASjs Server on a VPS (Digital Ocean)
category: SASjs Server
featuredImage: ../assets/sasjs_server.png
tags:
  - SASjs
  - SASjs Server
  - SAS Admin
  - SAS
---

[SASjs Server](https://server.sasjs.io) is the latest addition to the [SASjs](https://sasjs.io) product family, and closes an important gap - namely, the ability to perform DevOps and launch applications on regular Foundation (desktop or server, windows or linux) SAS.

This guide will show you how to install and configure SASjs on a VPS (Virtual Private Server), such as a Digital Ocean droplet.

## Introduction

Like all [SASjs tools](https://github.com/sasjs), SASjs Server is MIT open source and hence completely free for commercial use.  The latest release is always available on the [github releases](https://github.com/sasjs/server/releases) page.  The major features are:

* Portal for 3rd Party Apps (AppStream)
* Permissions by User or Group
* Multiple runtimes (SAS, JS)
* Online IDE (Studio)
* Stored Programs
* REST API
* TLS

One of the (many) nice things about SASjs Server is that it is extremely lightweight!  You can even run it on a $6 VPS, as shown here::

<iframe width="560" height="315" src="https://www.youtube.com/embed/aYufNmHLmBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this guide we show you exactly how to create a server image like the one above.  If you are planning multiple users, you might want to consider a slightly higher spec!  We have a dozen or so users on our $28 per month image, plus all our test suites, and the performance has been great.

## Pre-Requisites

Before you get started, be sure you can obtain the following:

* The IP address of your VPS, with root SSH access, eg: `167.44.44.44`
* A copy of SAS (or WPS) and the corresponding licence key
* A domain (and access to the DNS panel), eg `mysas.mycompany.com`
* A MongoDB connection string (you can provision one locally or use a free cloud instance)


## Server Setup

Let's get this machine configured! First we log in as root, eg:

```bash
# Enter as root using YOUR new server IP address
ssh root@167.44.44.44
```

Next, we create a unix group (`sas`) and create the system user account / home directory:

```bash
# Create a sas group
addgroup sas
# Make the user account (eg sasjssrv)
adduser --disabled-password --gecos "" sasjssrv
# Add to `sas` group
adduser sasjssrv sas
```

## SAS Installation

This part will vary depending on your service provider.  Follow the necessary instructions to install the basic software suite. You do NOT need any products beyond the basic SAS executable (`sas.exe` / `sas.sh`).

## TLS

Before proceeding with TLS (SSL) it is necessary to first update your DNS and add an "A record" pointing to your server IP.

![](../assets/sasjs_server_dns.png)

Once this is done, we can generate https certificates using `certbot` as follows:

```bash
snap install core; snap refresh core
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
# provide domain to terminal prompt WITHOUT https prefix, eg mysas.mycompany.com
sudo certbot certonly --standalone

# ensure members of the sas group can access the certs
# update the paths below according to the actual domain!
mkdir /opt/certificates
cp /etc/letsencrypt/live/mysas.mycompany.com/fullchain.pem /opt/certificates/fullchain.pem
cp /etc/letsencrypt/live/mysas.mycompany.com/privkey.pem /opt/certificates/privkey.pem
chgrp -R sas /opt/certificates
chmod -R g+r /opt/certificates
```

## SASjs Installation & Configuration

Here's the exciting part - the SASjs config!  The instructions below provide a FULL deployment, including TLS / server mode / JS runtime option.  If any part of this is not relevant for your use case, you can simply omit it.

```bash
# change into the folder.  Remain as root to keep files protected.
cd /home/sasjssrv

# grab latest api server
curl -L https://github.com/sasjs/server/releases/latest/download/linux.zip > linux.zip
# unzip can be installed with `apt install unzip`
unzip linux.zip

# Tell SASjs the location of your SAS executable
echo "SAS_PATH=/path/to/your/sas.sh" > .env
# At this point you can already stop, and you
# will have SASjs Server in desktop mode!


# If you would also like the option of a JS runtime, follow these steps:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install --lts
echo "NODE_PATH=$(which node)" >> .env
echo "RUN_TIMES=sas,js" >> .env

# Server Mode enables Users, Groups & Permissions
# But requires a Mongo DB connx string
echo "MODE=server" >> .env
# DB connection string
echo "DB_CONNECT=mongodb+srv://admin:admin@cluster0.YOURINSTANCE.mongodb.net/sasjs?retryWrites=true&w=majority" >> .env

# For https, point at the certs generated previously
echo "PORT=443" >> .env
echo "PROTOCOL=https" >> .env
echo "CERT_CHAIN=/opt/certificates/fullchain.pem" >> .env
echo "PRIVATE_KEY=/opt/certificates/privkey.pem" >> .env

# Create a handy refresh script to update SASjs Server
cat > refreshSASjs.sh <<EOL
#bin/bash
curl -L https://github.com/sasjs/server/releases/latest/download/linux.zip > linux.zip
unzip -o linux.zip
EOL
chmod 774 refreshSASjs.sh

# enable api-linux to run on port 443
# re-run whenever SASjs Server is re-installed
setcap 'cap_net_bind_service=+ep' /home/sasjssrv/api-linux
```

That's the setup. Now, the launch - using the designated system account.  Be aware that anyone running code or Stored Programs will be executing under this OS identity.

```bash
# switch to system user
sudo su - sasjssrv
# launch SASjs Server
nohup ./api-linux > server.log 2>&1 &
```

You should now be able to access SASjs Server at your domain, eg `mysas.mycompany.com` using the default credentials (`secretuser`/`secretpassword`).  If there are problems connecting, check out the logs in the `/home/sasjssrv/sasjs_root/logs` directory.

## Create the SASjs Users

Users can be added manually using the rest api, or in bulk using SASjs Studio - here is some sample code!

```sas
data work.users;
  infile cards dsd;
  input username:$12. displayname:$32.;
  putlog _all_;
  call execute(
    '%nrstr(%ms_createuser('!!username!!',demo123,displayname='!!displayname!!'))'
  );
cards4;
sylvester,Sylvester Stallone
rocky,Rocky Balboa
john,John Johnston
;;;;
run;

%ms_getusers(outds=work.users)

%mp_ds2md(work.users)
```

Finally - don't forget to change the password for the secretuser, and request that other users do the same for theirs.

If you'd like to perform additional configuration, just update the [name / value pairs](https://server.sasjs.io/settings/) in the `/home/sasjssrv/.env` file and restart the server.

