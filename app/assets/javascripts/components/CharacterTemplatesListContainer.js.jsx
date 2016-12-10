var CharacterTemplatesListContainer = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
    params: React.PropTypes.object
  },

  getDefaultProps: function () {
    return {params: {}};
  },

  getInitialState: function () {
    return {data: null};
  },

  loadDataFromServer: function () {
    var url = this.props.url;
    var oldData = this.state.data;
    var params = this.props.params;
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
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, 2000);
  },

  render: function () {
    var characterTemplatesList;
    if (this.state.data == null) {
      characterTemplatesList = <h6>Loading Character Templates...</h6>;
    } else {
      characterTemplatesList = <CharacterTemplatesList data={this.state.data} />;
    }
    return (
      <div>
        {characterTemplatesList}
      </div>
    );
  }
});
