# Redux web application with ExpressJs API

This is a simple example how you can write modern javascript ES6 application.

## How does it work?
Application contains two pages. 
First is Customers List with implementation "Load More" button and Search bar.
Second is Customer Detail.
Front-end of this App is in ReactJS with Redux state managment and React router. 
Design is in Material Design pattern by Materialize framework. 
For communicate with API app use fetch.

Webpack is used for compile JS files for front-end.

Server part is in NodeJs with ExpressJs framework. 
File db.json is used as simple database with underscore-db lib. 


## What is in example used ?

 - [ReactJS](https://facebook.github.io/react/)
 - [Redux](https://github.com/reactjs/redux)
 - [Redux Thunk](https://github.com/gaearon/redux-thunk)
 - [React Router](https://react-router.now.sh/)
 - [Materialize](http://materializecss.com/about.html)
 - [Webpack 2](https://webpack.js.org/)
 - [Express](http://expressjs.com/)
 - [Lodash](https://lodash.com/)
 - [Underscore-db](https://github.com/typicode/underscore-db)
 - [Node.js](https://nodejs.org/en/)
 
 ## Todo List
 - [ ] Server rendering 
 - [ ] Better Url handling (/search/to/, /detail/1/) and server render specific url
 - [ ] Customer add page
 - [ ] Edit customer page
 - [ ] Improve DatabaseHelper
 - [ ] Webpack config for css
 - [ ] Add eslint and refactor
 - [ ] Make better design