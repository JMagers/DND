var CharacterTemplatesIndex = React.createClass({
  propTypes: {
    jsonUrl: React.PropTypes.string.isRequired
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
    var params = {method: this.state.method, direction: this.state.direction};
    return (
      <div>
        <h1>Character Templates</h1>
      </div>
    );
  }
});
