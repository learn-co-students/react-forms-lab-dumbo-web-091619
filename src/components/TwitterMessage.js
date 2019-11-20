import React from "react";

class TwitterMessage extends React.Component {

   state = {
      message: ""
    }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      // remaining_chars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        { this.props.maxChars - this.state.message.length }
      </div>
    );
  }
}

export default TwitterMessage;
