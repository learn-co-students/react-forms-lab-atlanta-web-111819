import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      count: 0

    };
  }

  onMessageChange = (e)=>{
    this.setState({
      message: e.target.value,
      count: e.target.value.length
    })
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onMessageChange}
        type="text" name="message" id="message" value={this.state.message} />
        {this.props.maxChars - this.state.count}
      </div>
    );
  }
}

export default TwitterMessage;
