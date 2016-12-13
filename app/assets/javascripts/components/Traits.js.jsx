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
      <div className="traits_data">
        <h3>Traits</h3>
        <div className="row">
          <div className="shrink columns">
            <div className="callout primary">
              <ul>
                {traits}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
