var CharacterTemplate = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    return (
      <div>
        <h1>JSON object</h1>
        <p>{JSON.stringify(data)}</p>
        <Abilities data={data.abilities} />
        <Traits data={data.traits} />
        {/*<SavingThrows data={data.saving_throws} />*/}
        {/*<Skills data={data.skills} />*/}
        {/*Other data*/}
      </div>
    );
  }
});
