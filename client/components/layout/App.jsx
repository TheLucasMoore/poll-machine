var React = require('react');
var PollsView = require('../polls/View.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="content">
        <PollsView/>
      </div>
    );
  }
});
