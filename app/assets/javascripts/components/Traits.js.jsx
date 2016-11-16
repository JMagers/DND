var Traits = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var trait_order = [
      'personality',
      'ideals',
      'bonds',
      'flaws'
    ];
    var traits = trait_order.map(function(trait_name) {
      var trait_value = data[trait_name];
      return (
        <li>
          <Trait name={trait_name} value={trait_value} />
        </li>
      );
    });
    return (
      <div>
        <h1>Traits</h1>
        <ul>
          {traits}
        </ul>
      </div>
    );
  }
});
