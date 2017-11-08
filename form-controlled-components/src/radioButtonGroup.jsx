import React, {Component} from 'react';
import RadioButton from './radioButton.jsx';

class RadioButtonGroup extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    const selectedRadioValue = this.props.radioSelectValue;

    return (
      <div>
        {
          Object.entries(this.props.radioButtonOptions).map((optionkeyValuePair) => {
            let optionKey = optionkeyValuePair[0], optionValue = optionkeyValuePair[1];

            return (
              <RadioButton
                key={`radioButton-${optionValue}`}
                name={this.props.groupName}
                optionKey={optionKey}
                optionValue={optionValue}
                onInputChange={this.handleChange}
                checked={optionValue === selectedRadioValue}
              />
            );
          })
        }
      </div>
    );
  }
}


export default RadioButtonGroup;
