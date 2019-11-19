import React from "react";

class TwitterMessage extends React.Component {
  state = { 
    message: "",
    remainingChars: this.props.maxChars
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    },() => console.log(this.state.message))
  }

  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <label>{this.state.remainingChars}</label> 
        <input onChange={ event => this.handleMessageChange(event) } type="text" name="message" id="message" value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
