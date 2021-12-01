import React from 'react';
import {FaTrashAlt} from "react-icons/all";

const LineItem = ({item, handleDelete, handleCheck}) => {
  return (
    <li className='item'>
      <input
        type="checkbox" checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={(item.checked) ? {textDecoration: 'line-through'} : null}
        onDoubleClick={() => handleCheck(item.id)}
      >{item.item}</label>
      <FaTrashAlt
        role="button" tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
