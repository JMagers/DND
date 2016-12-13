var Abilities = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var abilityOrder = [
      'strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charisma'
    ];
    var abilities = abilityOrder.map(function(abilityName) {
      var abilityAttributes = data[abilityName];
      return (
        <li>
          <Ability name={abilityName} attributes={abilityAttributes} />
        </li>
      );
    });
    return (
      <div>
        <h3>Abilites</h3>
        <div className="callout primary">
          <ul>
            {abilities}
          </ul>
        </div>
      </div>
    );
  }
});
