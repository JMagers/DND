var SavingThrows = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var saving_throw_order = [
      'strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charisma'
    ];
    var savingThrows = saving_throw_order.map(function(saving_throw_name) {
      var saving_throw_attributes = data[saving_throw_name];
      return (
        <li>
          <SavingThrow name={saving_throw_name} attributes={saving_throw_attributes} />
        </li>
      );
    });
    return (
      <div>
        <h1>Saving Throws</h1>
        <ul>
          {savingThrows}
        </ul>
      </div>
    );
  }
});
