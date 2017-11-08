import React, {Component} from 'react';
import PropTypes from 'prop-types';

function ListItem(props){
  return (
    <li className={props.className} dangerouslySetInnerHTML={{__html: props.value}}></li>
  );
}

ListItem.defaultProps = {
  className: '',
};


ListItem.propTypes = {
  className: PropTypes.string,
};

export default ListItem;
