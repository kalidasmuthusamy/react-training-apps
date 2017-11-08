import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    return (
      <select value={this.props.selectedValue} name="selectValue" onChange={this.handleChange} >
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

SelectBox.propTypes = {
  onInputChange: PropTypes.func,
  selectedValue: PropTypes.string,
  selectOptions: PropTypes.object,
};

SelectBox.defaultProps = {
  selectOptions: {},
}

export default SelectBox;
