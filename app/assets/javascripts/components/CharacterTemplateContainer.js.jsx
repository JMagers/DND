var CharacterTemplateContainer = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {data: {}};
  },

  loadDataFromServer: function() {
    url = this.url;
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: formatTemplateData(data)});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }
    });
  },

  componentDidMount: function() {
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, 4000);
  },

  render: function() {
    return (
      <div>
        <h1>Here is Data from server</h1>
        <p>{JSON.stringify(this.state.data)}</p>
        {/*<CharacterTemplate data={this.state.data} />*/}
      </div>
    );
  }
});
