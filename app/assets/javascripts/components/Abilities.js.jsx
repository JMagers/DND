var Abilities = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var ability_order = [
      'strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charisma'
    ];
    var abilities = ability_order.map(function(ability_name) {
      var ability_attributes = data[ability_name];
      return (
        <li>
          <Ability name={ability_name} attributes={ability_attributes} />
        </li>
      );
    });
    return (
      <div>
        <h1>Abilites</h1>
        <ul>
          {abilities}
        </ul>
      </div>
    );
  }
});
