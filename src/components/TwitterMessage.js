import React from "react";

class TwitterMessage extends React.Component {

    state = {
      value:""
    };


  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }





  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.onChange} />
        {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
