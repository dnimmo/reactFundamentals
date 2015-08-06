var App = React.createClass({
  // Set default properties
  getDefaultProps: function(){
    return {
      text : 'Default Text'
    }
  },
  // Set the initial state
  getInitialState: function(){
    return {
      text : 'the state text',
      id: 0
    }
  },
  // Function to update state, takes in an event
  update: function(e){
    this.setState({text: e.target.value})
  },
  // Clear state text
  delete: function(){
    this.setState({text: ''})
  },
  render: function(){
    return (
      <main>
        <h1>{this.state.text}</h1>
        <input type="text" onChange={this.update} value={this.state.text}/>
        <button value="Delete" onClick={this.delete}>Delete</button>
      </main>
    );
  }
});

React.render(<App text="this is the property 'text'"/>, document.body);