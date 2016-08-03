var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var PollsView = require('../components/polls/View.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="polls" handler={PollsView} />
    <Route name="about" handler={AboutView} />
  </Route>
);
