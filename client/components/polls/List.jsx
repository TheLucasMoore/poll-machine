var React = require('react');
var Poll = require('./Poll.jsx');

module.exports = React.createClass({
  render: function() {
    var polls = this.props.data.map(function(poll) {
      return (
        <Poll key={poll.id} content={poll.title} />
      );
    });

    return (
      <ul className="polls-list">
        {polls}
      </ul>
    );
  }
});
