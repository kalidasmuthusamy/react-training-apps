import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './listItem.jsx';

function List(props){
  return (
    <ul className="list-ul">
      {props.listValues.map((listValue, index) => {
        return (
          <ListItem value={listValue} key={index} />
        );
      })}
    </ul>
  );
}

List.defaultProps = {
  listValues: [],
};


List.propTypes = {
  listValues: PropTypes.array,
};

export default List;
