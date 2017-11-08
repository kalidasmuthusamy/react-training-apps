import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render(){
    return (
      <button type="button" onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

Button.defaultProps = {
  value: '',
  onClick: PropTypes.func,
};


Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
