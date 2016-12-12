function CharacterTemplatesList (props) {
  var characterTemplatesList = props.data.map(function (characterTemplate) {
    var key = 'characterTemplateSummary' + characterTemplate.id;
    return (
      <li key={key}>
        <CharacterTemplateSummary data={characterTemplate} cur_user_id={props.cur_user_id} />
      </li>
    );
  });
  return (
    <div className="character_templates">
      <ul>
        {characterTemplatesList}
      </ul>
    </div>
  );
}

CharacterTemplatesList.propTypes = {
  data: React.PropTypes.object.isRequired,
  cur_user_id: React.PropTypes.number.isRequired
};
