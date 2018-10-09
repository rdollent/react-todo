var React = require("react");
var ReactDOM = require("react-dom");

// object destructuring
var {Route, Router, IndexRoute, hashHistory} = require("react-router");


var TodoApp = require('TodoApp');
// load foundation
// old css versionW--- require("style!css!foundation-sites/dist/foundation.min.css");

// require does not know how to load css. use css! loader
$(document).foundation();


// app css
// comment this out for webpack to work
require("style!css!sass!applicationStyles");
// require('applicationStyles');

ReactDOM.render(
    <TodoApp />,
    document.querySelector("#app")
);



