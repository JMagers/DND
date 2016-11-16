var Traits = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var traitOrder = [
      'personality',
      'ideals',
      'bonds',
      'flaws'
    ];
    var traits = traitOrder.map(function(traitName) {
      var traitValue = data[traitName];
      return (
        <li>
          <Trait name={traitName} value={traitValue} />
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
