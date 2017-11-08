import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextBox extends Component{
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event);
  }

  render(){
    return (
      <input type="text" value={this.props.textValue} name={this.props.inputName} onChange={this.handleChange} />
    );
  }
}

TextBox.propTypes = {
  inputName: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
  inputName: "textValue",
};

export default TextBox;
