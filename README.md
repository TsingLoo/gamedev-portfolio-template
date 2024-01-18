# What is this ?
This portfolio is constructed from the base template provided by [schouffy](https://github.com/schouffy/gamedev-portfolio), further enhanced by incorporating elements from [11BelowStudio/gamedev-portfolio-(template/tree/vite-vue3](https://github.com/11BelowStudio/gamedev-portfolio-template/tree/vite-vue3).  

In an effort to reduce loading times, external resources such as the [Karla fonts family](https://fonts.google.com/specimen/Karla?query=ka) and [Font Awesome assets](https://fontawesome.com/v4/get-started/) have been internally hosted within this portfolio.

For a real world use case, welcome to check my portfolio: [game.tsingloo.com/portfolio](https://game.tsingloo.com/portfolio/index.html)


# How to use

1. Install

    - Fork or duplicate the repository
    - npm install
    - npm run dev

2. Customize
* For the content
    - Except for the projects pages, everything is static HTML that you can edit directly in the views and components files
    - For the projects pages, the page is dynamically populated at runtime using data stored in Typescript files (data/GameProjectsData.ts and data/OtherProjectsData.ts). Make the changes directly in these .ts files
    - Static files (images, icons, downloadables,..) should be placed in /public folder.
    - Make the necessary changes in the .env file (this is mostly the site metadata). You need to "npm run dev"/
    "npm run build" again when updating this file.

* For the style
    - The basic colors can be edited in the css/variables.less file.
    - The rest of the CSS can be edited, if need be, directly inside each view and component.
    - If you place custom CSS in your projects HTML data (that will be displayed in an overlay dialog), you must add the definition for this CSS in the css/projects.less file

* Additional info & optimizations
    - Images will be loaded on-demand when you switch tabs. It means if you have big images or animated gifs, you may want to preload them so the user sees them faster when they change tabs. To do this, you can call Helpers.preloadImages in app.vue to preload heavy images.

3. Deploy

    - npm run build
    - copy the content of the "dist" folder (created by "npm run build") to the publish location.
    - Check this example if you want to deploy to GitHub pages or some other major static content host: https://vitejs.dev/guide/static-deploy.html


# License

This is GNU LGPL, check the LICENSE file.

Please consider keeping the link to this repository at the bottom of your portfolio, so other people can find and use this template too. Of course it's not mandatory though.
