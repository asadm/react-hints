## Development Cheatsheet

### Development Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).

* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.

* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

  ​

### Documentation Site

The boilerplate includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a documentation site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

* Building - **npm run gh-pages** - Builds the documentation into `./gh-pages` directory.
* Deploying - **npm run gh-pages:deploy** - Deploys the contents of `./gh-pages` to the `gh-pages` branch. GitHub will pick this up automatically. Your site will be available through *<user name>.github.io/<project name>`.
* Generating stats - **npm run stats** - Generates stats that can be passed to [webpack analyse tool](https://webpack.github.io/analyse/). This is useful for investigating what the build consists of.


