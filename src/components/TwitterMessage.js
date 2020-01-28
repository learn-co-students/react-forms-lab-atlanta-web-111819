import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ''
      // maxChars: props.maxChars
    };
  }


  handleKey = (e) => {
    console.log(e.target.value)
    this.setState({ message: e.target.value})
    // let words = e.target.value.split(' ')
    // let newChar = this.props.maxChars - e.target.value.length
    // console.log(this.props.maxChars - e.target.value.length)
    // this.setState({ maxChars: newChar})
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  onChange={this.handleKey} value={this.state.message}/>
      {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
