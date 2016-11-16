var Skills = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var skill_order = [
      'acrobatics',
      'animal_handling',
      'arcana',
      'athletics',
      'deception',
      'history',
      'insight',
      'intimidation',
      'investigation',
      'medicine',
      'nature',
      'perception',
      'performance',
      'persuasion',
      'religion',
      'sleight_of_hand',
      'stealth',
      'survival'
    ];
    var skills = skill_order.map(function(skill_name) {
      var skill_attributes = data[skill_name];
      return (
        <li>
          <Skill name={skill_name} attributes={skill_attributes} />
        </li>
      );
    });
    return (
      <div>
        <h1>Skills</h1>
        <ul>
          {skills}
        </ul>
      </div>
    );
  }
});
