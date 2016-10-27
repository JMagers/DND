var CharacterTemplateContainer = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {data: {}};
  },

  formatData: function(data) {
    return formatTemplateData(data);
  },

  loadDataFromServer: function() {
    url = this.url;
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }
    });
  },

  componentDidMount: function() {
    loadDataFromServal();  // make sure to set interval later!!!
  },

  render: function() {
    return (
      <div>
        <h1>Here is Data from server</h1>
        <p>{this.state.data}</p>
        {/*<CharacterTemplate data={this.state.data} />*/}
      </div>
    );
  }
});
