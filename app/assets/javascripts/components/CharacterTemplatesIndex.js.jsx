var CharacterTemplatesIndex = React.createClass({
  propTypes: {
    jsonUrl: React.PropTypes.string.isRequired,
    user_id: React.PropTypes.string
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
      <div>
        <h1>Character Templates</h1>
        <h6>Sort by:</h6>
        <a className="button" id="most-recent-button" onClick={this.handleClick}>Most Recent</a>
        <a className="button" id="character-name-button" onClick={this.handleClick}>Character Name</a>
        <a className="button" id="num-forks-button" onClick={this.handleClick}>Number of Forks</a>
        <CharacterTemplatesListContainer url={jsonUrl} params={params} />
      </div>
    );
  }
});
