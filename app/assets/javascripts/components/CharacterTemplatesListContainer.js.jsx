var CharacterTemplatesListContainer = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
    params: React.PropTypes.object,
    cur_user_id: React.PropTypes.number.isRequired
  },

  getDefaultProps: function () {
    return {params: {}};
  },

  getInitialState: function () {
    return {
      data: null,
      interval: null
    };
  },

  loadDataFromServer: function (props) {
    if (props === undefined) {
      props = this.props;
    }
    var url = props.url;
    var params = props.params;
    var oldData = this.state.data;
    // Add parameters to url
    url += '?';
    var i = 0;
    for (param in params) {
      if (i > 0) {
        url += '&'
      }
      url += param + '=' + params[param];
      i++;
    }
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // Only update this.state.data if newData is different than oldData
        var newData = data;
        if (oldData === null || JSON.stringify(newData) != JSON.stringify(oldData)) {
          this.setState({data: newData});
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }
    });
  },

  componentDidMount: function() {
    this.loadDataFromServer(this.props);
    this.state.interval = setInterval(this.loadDataFromServer, 2000);
  },

  componentWillUnmount: function() {
    clearInterval(this.state.interval)
  },

  componentWillReceiveProps: function (nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) {
      return;
    }
    this.loadDataFromServer(nextProps);
  },

  render: function () {
    var characterTemplatesList;
    if (this.state.data == null) {
      characterTemplatesList = <h6>Loading Character Templates...</h6>;
    } else {
      characterTemplatesList = <CharacterTemplatesList data={this.state.data} cur_user_id={this.props.cur_user_id} />;
    }
    return (
      <div>
        {characterTemplatesList}
      </div>
    );
  }
});
