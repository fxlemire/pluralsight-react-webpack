Pluralsight React Webpack
=========================
[Building a real-time isomorphic app using React JS, Webpack, Flux, Firebase](http://app.pluralsight.com/courses/build-isomorphic-app-react-flux-webpack-firebase)

# Installation

## Requirements
* `npm install -g gulp webpack webpack-dev-server`
* `git clone git@github.com:fxlemire/pluralsight-react-webpack.git`
* `npm install`

## VS Code Users
* `npm install -g typings`
* `typings install`

## Blocking Yourself From Google Analytics
* Download the [*Block Yourself From Analytics*](https://chrome.google.com/webstore/detail/block-yourself-from-analy/fadgflmigmogfionelcpalhohefbnehm?hl=en) extension
* Add `localhost` to the extension's settings (Chrome settings --> More tools --> Extensions)

## Launch Website
* `gulp server`

## Persisting Changes Made Within Chrome
* More Tools --> Developer Tools
* Settings (F1)
* Workspace --> Add Folder --> Select the `src/client` folder
* Mappings: http://localhost:8080/src/client --> `/`

# Testing
* `npm test` or `gulp test`
