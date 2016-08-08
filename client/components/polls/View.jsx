var React = require('react');
var PollList = require('./List.jsx');
var PollForm = require('./Form.jsx')

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
  writePollsToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/polls', data, function(poll) {
      var polls = this.state.data;
      polls.unshift(poll);
      this.setState({data: polls});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="poll-view">
        <PollForm writePollsToAPI={this.writePollsToAPI} />
        <PollList data={this.state.data} />
      </div>
    );
  }
});
