var React = require('react');
var Button = require('react-bootstrap/lib/button');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var content = this.refs.content.getDOMNode().value.trim();
    if (!content) {return;}
    // if (this.props.signedIn) {
      this.props.writePollsToAPI(JSON.stringify({poll: {title: content}}));
      this.refs.content.getDOMNode().value = '';
      this.refs.content.getDOMNode().blur();
    // } else {
    //  alert('Please sign in to blab!');
    // Will activate when log in works on Front End
    // }
  },
  render: function() {
    return (
      <form className="polls-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Poll Name" ref="content" name="title"/>
        <Button>Create</Button>
      </form>
    );
  }
});
