var AllSkills = React.createClass({
  getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    $.getJSON('api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>All Skills Full Ahead!</h1>
      </div>
    )
  }
});