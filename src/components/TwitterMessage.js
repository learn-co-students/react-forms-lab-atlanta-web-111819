import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : ''
    };
  }

  handleChange = event => {
    this.setState({
      message : event.target.value
    })
  }
 
  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        <span>{this.props.maxChars-this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
