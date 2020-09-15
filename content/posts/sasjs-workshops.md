---
title: SASjs Workshops
date: 2020-09-14T09:00:00.000Z
layout: POST
path: /sasjs-workshops
description: Learn to rapidly build and deploy SAS-Powered Web Applications on both SAS 9 and Viya using the SASjs framework
category: SASjs
featuredImage: ../assets/sasjs_square.png
tags:
  - SAS
---

## Overview

SAS is a fantastic platform for enterprise app development, due to a number of features that SAS delivers "out of the box":

- Web Server (Apache on Viya)
- App Server (STP or Compute)
- Integrated Authentication (eg LDAP)
- Enterprise grade security

In summary - to build an app on a default SAS installation, you can just start coding. There is nothing more to provision!

The caveat - there are a few things to consider if you'd like to build something that's automated, maintainable, and scalable. For instance:

- How will you deploy your services?
- How can you avoid a file system dependency?
- Is there a code injection risk?
- Avoiding "spaghetti code" and put statements
- Numerical Precision and Special Characters
- What if you don't have access to the web server?

To address these points, and many more, we built [SASjs](https://sasjs.io).

![SASjs](../assets/sasjs_240x120.png)

## Background

Launched in early 2020, the SASjs framework provides a set of tools that can be used either individually (for particular use cases) or together - for maximum scale and performance when it comes to building & deploying SAS-Powered Web Applications.

All the code is MIT open-source (free for commercial use), and is actively maintained by the SAS Apps division at [Analytium](https://analytium.co.uk). It powers commercial apps such as [Data Controller for SAS](https://datacontroller.io) and hence - heavily tested in real-world, production environments.

## Framework

There are three major parts to the framework:

1. [@sasjs/core](https://github.com/sasjs/core) - a SAS Macro library for backend SAS Application Developers
2. [@sasjs/adapter](https://github.com/sasjs/adapter) - a JavaScript library aimed at frontend web developers
3. [@sasjs/cli](https://github.com/sasjs/cli) - a command line interface providing build and deployment tooling as well as consistent project setup

Another great thing about the SASjs approach is that anything you build with it on SAS 9 can be _easily_ ported to SAS Viya. It's also very FAST. Here's a demo of building and deploying an app on SAS Viya in just one minute!

<iframe width="560" height="315" src="https://www.youtube.com/embed/WwGptgvSqSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Workshop

We would like to support the SAS community and help more SAS Users build awesome web applications on SAS 9 and Viya. For this reason we are running regular workshops during the rest of 2020.

The duration is 1 hour, and will cover:

- 5 mins - get to know attendee objectives
- 15 mins - slides with generic advice for building apps on SAS
- 15 mins - Demo of building / deploying web apps using the framework
- 15 mins - Deep dive into SASjs CLI functionality
- 10 mins - Questions and discussion

To reserve your spot, visit the SASjs page on linkedin, and select an event from the bottom right hand side of the page.

**[https://www.linkedin.com/company/sasjs](https://www.linkedin.com/company/sasjs)**

Workshops are open to SAS Partners and Consultants as well as Customers and End Users. Contact [Allan Bowe](https://www.linkedin.com/in/allanbowe/) directly if you would like a dedicated internal session (4 or more people).
