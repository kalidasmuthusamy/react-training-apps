import React, {Component} from 'react';
import TextBox from './textBox.jsx';
import SelectBox from './selectBox.jsx';
import CheckBox from './checkBox.jsx';
import RadioButtonGroup from './radioButtonGroup.jsx';

class FormReact extends Component{
  constructor(props){
    super(props);
    this.selectOptions = {
      react: "react",
      ruby: "ruby",
      rails: "rails",
      node: "node",
      python: "python",
    };

    this.radioButtonOptions = {
      React: "react",
      Ruby: "ruby",
      Rails: "rails",
      Node: "node",
      Python: "python",
    }

    this.radioGroupName = 'radioSelectValue';

    this.state = {
      textValue: "",
      selectValue: Object.keys(this.selectOptions)[3],
      checkValue: true,
      radioSelectValue: 'rails',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const targetName = target.name;
    const targetType = target.type;

    const targetValue = target.type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [targetName]: targetValue,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(Object.values(this.state).join(','));
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <TextBox
          textValue={this.state.textValue}
          onInputChange={this.handleInputChange}
        />
        <SelectBox
          selectOptions={this.selectOptions}
          selectValue={this.state.selectValue}
          onInputChange={this.handleInputChange}
        />
        <CheckBox
          checkValue={this.state.checkValue}
          onInputChange={this.handleInputChange}
        />
        <RadioButtonGroup
          groupName={this.radioGroupName}
          radioButtonOptions={this.radioButtonOptions}
          radioSelectValue={this.state.radioSelectValue}
          onInputChange={this.handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormReact;
