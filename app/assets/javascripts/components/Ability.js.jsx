var Ability = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    attributes: React.PropTypes.object.isRequired
  },

  render: function() {
    var name = formatVarName(this.props.name);
    var attributes = this.props.attributes;
    return (
      <div>
        <h5>{name}</h5>
        <ul>
          <li><strong>value: </strong>{attributes.value}</li>
          <li><strong>mod: </strong>{attributes.mod}</li>
        </ul>
      </div>
    );
  }
});
