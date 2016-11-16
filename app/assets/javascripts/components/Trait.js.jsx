var Trait = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  },

  render: function() {
    var name = formatVarName(this.props.name);
    return (
      <div>
        <h5>{name}</h5>
        <p>{this.props.value}</p>
      </div>
    );
  }
});
