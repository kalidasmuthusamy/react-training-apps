import React, {Component} from 'react';


class SelectBox extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    return (
      <select value={this.props.selectValue} name="selectValue" onChange={this.handleChange} >
        {
          Object.entries(this.props.selectOptions).map((optionkeyValuePair) => {
            let optionKey = optionkeyValuePair[0], optionValue = optionkeyValuePair[1];

            return (
              <option
                value={optionKey}
                key={optionKey}
              >
                {optionValue}
              </option>
            );
          })
        }
      </select>
    );
  }
}

export default SelectBox;
