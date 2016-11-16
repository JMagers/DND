var CharacterTemplate = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    return (
      <div>
        <h1>JSON object</h1>
        <p>{JSON.stringify(data)}</p>
        <Abilities data={data.abilities} />
        <Traits data={data.traits} />
        <SavingThrows data={data.saving_throws} />
        <Skills data={data.skills} />
        <h1>Other Data</h1>
        <ul>
          <li><strong>Name: </strong>{data.character_name}</li>
          <li><strong>Class: </strong>{data.character_class}</li>
          <li><strong>Background: </strong>{data.background}</li>
          <li><strong>Race: </strong>{data.race}</li>
          <li><strong>Alignment: </strong>{data.alignment}</li>
          <li><strong>Passive Perception: </strong>{data.passive_perception}</li>
          <li><strong>Armor Class: </strong>{data.armor_class}</li>
          <li><strong>Initiative: </strong>{data.initiative}</li>
          <li><strong>Speed: </strong>{data.speed}</li>
          <li><strong>Other Proficiences/Languages: </strong>{data.other_proficiencies_languages}</li>
          <li><strong>Hit Point Max: </strong>{data.hit_point_max}</li>
          <li><strong>Hit Dice: </strong>{data.hit_dice}</li>
          <li><strong>Features/Traits: </strong>{data.features_traits}</li>
          <li><strong>Proficiency Bonus: </strong>{data.proficiency_bonus}</li>
        </ul>
      </div>
    );
  }
});
