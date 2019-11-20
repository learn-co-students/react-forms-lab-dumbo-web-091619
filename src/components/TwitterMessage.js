import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      body: ""
    };
  }
  handleCharacterCount = () => {
    let remainingChars = this.props.maxChars - this.state.body.length
    return remainingChars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.setState({body: event.target.value})} value={this.state.body}/>
        {this.handleCharacterCount()}
      </div>
    );
  }
}

export default TwitterMessage;
 