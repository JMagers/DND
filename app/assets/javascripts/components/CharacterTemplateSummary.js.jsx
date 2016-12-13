function CharacterTemplateSummary (props) {
  var data = props.data;
  var cur_user_id = props.cur_user_id;
  var modify_buttons = null
  if (cur_user_id == data.user_id) {
    var modify_buttons = (
      <li>
        <a href={data.show_url}>Show</a> | <a href={data.edit_url}>Edit</a>
      </li>
    );
  }
  return (
    <div className="character_template_summary">
      <div className="callout primary">
        <div className="row">
          <div className="shrink columns">
            <h2><a href={data.show_url}><strong>{data.character_name}</strong></a></h2>
            <ul>
              <li><strong>Author: </strong>{data.username}</li>
              <li><strong>Number of forks: </strong>{data.num_forks}</li>
              <li>{data.created_at}</li>
              {modify_buttons}
            </ul>
          </div>
          <div className="columns">
            <a href={data.show_url}><img src={data.picture_url} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

CharacterTemplateSummary.propTypes = {
  data: React.PropTypes.object.isRequired,
  cur_user_id: React.PropTypes.number.isRequired
};
