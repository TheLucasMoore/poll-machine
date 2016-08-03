var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="poll">
        <span className="poll-text">{this.props.content}</span>
      </li>
    );
  }
});
