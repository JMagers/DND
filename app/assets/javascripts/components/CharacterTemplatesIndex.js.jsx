var CharacterTemplatesIndex = React.createClass({
  propTypes: {
    jsonUrl: React.PropTypes.string.isRequired,
    cur_user_id: React.PropTypes.number.isRequired,
    user_id: React.PropTypes.number
  },

  getInitialState: function () {
    return {
      method: 'created_at',
      direction: 'desc'
    };
  },

  handleClick: function (e) {
    var buttonToMethod = {
      'character-name-button': 'character_name',
      'num-forks-button': 'num_forks',
      'most-recent-button': 'created_at'
    };
    var method = buttonToMethod[e.target.id];
    direction = 'desc';
    if (method == 'character_name') {
       direction = 'asc';
    }
    this.setState({method: method, direction: direction});
  },

  render: function () {
    var jsonUrl = this.props.jsonUrl;
    var params = {method: this.state.method, direction: this.state.direction, user_id: this.props.user_id};
    return (
      <div id='character_templates_index'>
        <h5>Order:</h5>
        <button className="button" id="most-recent-button" onClick={this.handleClick}>Most Recent</button>
        <button className="button" id="character-name-button" onClick={this.handleClick}>Character Name</button>
        <button className="button" id="num-forks-button" onClick={this.handleClick}>Number of Forks</button>
        <CharacterTemplatesListContainer url={jsonUrl} params={params} cur_user_id={this.props.cur_user_id} />
      </div>
    );
  }
});
