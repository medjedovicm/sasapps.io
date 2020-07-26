[SAS Apps] is a static blog site. It has following features implemented.

- CMS
- Auto deployments
- Forms

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

### Tech

SASApps uses a number of open source projects to work properly:

- [Gatsby] - framework based on React that helps developers build blazing fast websites and apps
- [Netlify] - an excellent option for deploying Gatsby sites.
- [Netlify CMS] - an open source, single page app written in React that lets you edit content and data files in your Git repository.
- [Kwes Forms] - Most customizable form service for web agencies.

Netlify auto-deployments and Netlify CMS is configured with Self Hosted Instance of Gitlab. So, just make commit to master branch and push to gitlab.

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[sas apps]: http://sasapps.io/
[gatsby]: https://www.gatsbyjs.org/
[netlify]: https://www.netlify.com/
[netlify cms]: https://www.netlifycms.org//
[kwes forms]: https://kwes.io/
