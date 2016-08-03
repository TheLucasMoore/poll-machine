var React = require('react');
var PollList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: [{id: 2, title: 'Another Serious One Guyz', user_id: '2'}, {id: 1, title: 'A very serious poll', user_id: '1'}]});
  },
  render: function() {
    return (
      <div className="list-view">
        <PollList data={this.state.data} />
      </div>
    );
  }
});
