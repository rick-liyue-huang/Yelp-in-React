import React from 'react';
import styled from 'styled-components';

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <SS
      style={{backgroundColor: colorValue, color: isDarkText ? '#000': '#fff'}}
    >
      <PP>{colorValue ? colorValue : 'Empty value'}</PP>
      <PP>{hexValue ? hexValue : null}</PP>
    </SS>
  );
};

Square.defaultProps = {
  colorValue: 'Empty Color value',
}


const SS = styled.section`
  width: 400px;
  height: 400px; 
  border: 2px solid #000;
  box-shadow: 2px 2px 5px #eee;
  display: grid;
  place-content: center;
`;

const PP = styled.p`
  text-align: center;
`;


export default Square;

