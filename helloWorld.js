// ==== H1 - "Hello World" style example =======
var H1 = React.createClass({
  // propTypes is optional; allows you to define types of properties, as well as defining whether they're required or not
  propTypes: {
    text : React.PropTypes.string.isRequired // will give a console warning if this is not passed in. In my example here, there's a default text that would be set anyway, so this isRequired is redundant, I've only put it here for the sake of having an example
  },
  
  // Default properties
  getDefaultProps: function(){
    return {
      text : "This is my default text"
    }
  },
  
  render:function(){
    // this.props passed in in the call to React.render
    var text = this.props.text;
    // Render methods can only return a single parent node. 
    // IE "<h1>My H1</h1><h2>My H2</h2> will not work", 
    // but "<header><h1>My H1</h1><h2>My H2</h2></header>" will.
    // The parentheses on the return line are optional, but if you choose not to use them then the element needs to be on the return line. I've decided that I prefer it this way, so I'm going to use parenthesis all the time, even for single-line return statements.
    return (
      <h1>{text}</h1>
    );
  }
});
      
React.render(<H1 text="First Method" />, document.body);

// ======== End of "Hello World" example =======