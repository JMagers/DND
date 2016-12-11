function CharacterTemplateSummary (props) {
  var data = props.data;
  var cur_user_id = props.cur_user_id;
  var modify_buttons = null
  if (cur_user_id == data.user_id) {
    var modify_buttons = (
      <li>
        <a href={data.edit_url}>Edit </a>
        <a rel="nofollow" data-method="delete" href={data.destroy_url}>Delete</a>
      </li>
    );
  }
  return (
    <div>
      <a href={data.show_url}><strong>{data.character_name}</strong></a>
      <ul>
        <li><strong>Author: </strong>{data.username}</li>
        <li><strong>Number of forks: </strong>{data.num_forks}</li>
        {modify_buttons}
      </ul>
    </div>
  );
}

CharacterTemplateSummary.propTypes = {
  data: React.PropTypes.object.isRequired,
  cur_user_id: React.PropTypes.number.isRequired
};
