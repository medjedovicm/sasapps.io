[SAS Apps] is a static blog site including third-party forms service.

## 🚀 Get Up and Running in 5 Minutes

You can get a new Gatsby site up and running on your local dev environment in 5 minutes with these four steps:

1.  **Install the Gatsby CLI.**

    ```shell
    npm install -g gatsby-cli
    ```

        	Recommended Gatsby CLI version: 2.12.61

2.  **Start the site in `develop` mode.**

    Next, move into your new site's directory and start it up:

    ```shell
    cd my-blazing-fast-site/
    gatsby develop
    ```

3.  **Create build and run locally `production` mode.**

    ```sh
    gatsby build
    gatsby serve
    ```

4.  **Push production build to server.**
    ```sh
    scp -P 18765 -r ./public/. analytiu@uk72.siteground.eu:/home/analytiu/public_html/sasappsio
    ```

### Tech

SASApps uses a number of open source projects to work properly:

- [Gatsby] - framework based on React that helps developers build blazing fast websites and apps
- [Kwes Forms] - Most customizable form service for web agencies.

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[sas apps]: http://sasapps.io/
[gatsby]: https://www.gatsbyjs.org/
[kwes forms]: https://kwes.io/
