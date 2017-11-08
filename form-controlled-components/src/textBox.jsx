import React, {Component} from 'react';

class TextBox extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    return (
      <input type="text" value={this.props.textValue} name="textValue" onChange={this.handleChange} />
    );
  }
}


export default TextBox;
