function CharacterTemplatesList (props) {
  var characterTemplatesList = props.data.map(function (characterTemplate) {
    var key = 'characterTemplateSummary' + characterTemplate.id;
    return (
      <li key={key}>
        <CharacterTemplateSummary data={characterTemplate} />
      </li>
    );
  });
  return (
    <ul>
      {characterTemplatesList}
    </ul>
  );
}

CharacterTemplatesList.propTypes = {
  data: React.PropTypes.object.isRequired
};
