import React, {Component} from 'react';

class CheckBox extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    return (
      <input
        type="checkbox"
        name="checkValue"
        checked={this.props.checkValue}
        value="Test Check"
        onChange={this.handleChange}
      />
    );
  }
}

export default CheckBox;
