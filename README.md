Pluralsight React Webpack
=========================
This repo is the product of following [Hendrik Swanepoel](https://twitter.com/hendrikswan)'s class:
[Building a real-time isomorphic app using React JS, Webpack, Flux, Firebase](http://app.pluralsight.com/courses/build-isomorphic-app-react-flux-webpack-firebase).

Major updates to [React](https://facebook.github.io/react/), [Material-Ui](http://www.material-ui.com/#/)
and [react-router](https://github.com/reactjs/react-router) occurred since the class was given (in October 2015). This repo is fully functional with these updates.
Have a look at the [package.json](package.json) file to know which versions have been used. Also, each module has a separate branch merge, so progress should be easy to track
through commits!

I also went beyond the scope of this class by adding thorough [ESLinting](http://eslint.org/), [SASS linting](https://github.com/sasstools/sass-lint), git hooks, a [Gulp](http://gulpjs.com/) environment
and a testing environment using tools such as [Karma](https://karma-runner.github.io/0.13/index.html), [Mocha](https://mochajs.org/) and [Istanbul](https://github.com/gotwarlost/istanbul).

Finally, I used [VSCode](https://code.visualstudio.com/) as a text editor, so some useful features will also be found in this repo, such as the use of [typings](https://github.com/typings)
that provide useful autocomplete features (IntelliSense) and some launch/task settings.

# Installation

## Requirements
* `npm install -g gulp webpack webpack-dev-server`
* `git clone git@github.com:fxlemire/pluralsight-react-webpack.git`
* `npm install`

## VS Code Users
* `npm install -g typings`
* `typings install`
* Install ESLint extension (`CTRL+P` + `'ext install ESLint'`)

## Launch Website
* `gulp serve`

# Testing
* `npm test` or `gulp test`
