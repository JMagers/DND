var Trait = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <p>{this.props.value}</p>
      </div>
    );
  }
});
