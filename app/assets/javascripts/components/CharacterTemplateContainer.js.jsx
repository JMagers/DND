var CharacterTemplateContainer = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {data: null};
  },

  loadDataFromServer: function() {
    var url = this.props.url;
    var oldData = this.state.data;
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // Only update this.state.data if newData is different than oldData
        var newData = formatTemplateData(data);
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
    setInterval(this.loadDataFromServer, 4000);
  },

  render: function() {
    var characterTemplate;
    if (this.state.data == null) {
      characterTemplate = <h6>Loading Character Template Data...</h6>;
    } else {
      characterTemplate = <CharacterTemplate data={this.state.data} />;
    }
    return (
      <div>
        {characterTemplate}
      </div>
    );
  }
});
