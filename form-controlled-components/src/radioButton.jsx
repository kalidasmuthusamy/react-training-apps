import React, {Component} from 'react';

class RadioButton extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    const optionKey = this.props.optionKey;
    const optionValue = this.props.optionValue;

    return (
      <div key={`wrapper-for-${optionKey}`}>
        <input
          type="radio"
          name={this.props.name}
          value={optionValue}
          key={optionValue}
          onChange={this.handleChange}
          checked={this.props.checked}
        />
        <label key={optionKey}>{optionKey}</label>
      </div>
    );
  }
}


export default RadioButton;
