var Skill = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    attributes: React.PropTypes.object.isRequired
  },

  render: function() {
    var attributes = this.props.attributes;
    return (
      <div>
        <h5>{this.props.name}</h5>
        <ul>
          <li><strong>value: </strong>{attributes.value}</li>
          <li><strong>bool: </strong>{attributes.bool.toString()}</li>
        </ul>
      </div>
    );
  }
});
