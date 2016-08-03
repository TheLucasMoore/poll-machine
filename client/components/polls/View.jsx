var React = require('react');
var PollList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readPollsFromAPI();
  },
  readPollsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/polls', function(polls) {
      this.setState({data: polls});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="list-view">
        <PollList data={this.state.data} />
      </div>
    );
  }
});
