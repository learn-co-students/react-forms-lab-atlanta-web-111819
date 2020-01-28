import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      message: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
          onChange={this.handleChange}
          value={this.state.message}
        />
        <p>
          Remaining Chars: {this.state.remainingChars}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
