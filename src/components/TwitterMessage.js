import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      charLeft: props.maxChars
    };
  }

  incChar = (e) => {
    // debugger
    this.setState({
       message: e.target.value,
       charLeft: this.props.maxChars - e.target.value.length
     })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.incChar} value={this.state.message} />
        <span>Char Left: {this.state.charLeft}</span>
      </div>
    );
  }
}

export default TwitterMessage;
