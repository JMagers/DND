function CharacterTemplateSummary (props) {
  var data = props.data;
  return (
    <div>
      <a href={data.show_url}><strong>{data.character_name}</strong></a>
      <ul>
        <li><strong>Number of forks: </strong>{data.num_forks}</li>
      </ul>
    </div>
  );
}

CharacterTemplateSummary.propTypes = {
  data: React.PropTypes.object.isRequired
};
