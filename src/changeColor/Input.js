import React from 'react';
import styled from "styled-components";
import colorNames from 'colornames'

const Input = ({colorValue, setColorValue, setHexValue,  isDarkText, setIsDarkText}) => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <label style={{position: 'absolute', left: '-99999px'}}>Add Color</label>
      <InputEle
        type="text" autoFocus={true}
        placeholder='add color value'
        required
        value={colorValue}
        onChange={e => {
          setColorValue(e.target.value)
          setHexValue(colorNames(e.target.value))
        }}
      />
      <button type={'button'} onClick={() => setIsDarkText(!isDarkText)}>Toggle Text Color</button>
    </Form>
  );
};

const Form = styled.form` 
  width: 400px;
`;

const InputEle = styled.input`
  margin-top: 0.5rem;
  padding: 0.25rem;
  width: 100%;
  font-size: 1rem;
  box-shadow: 2px 2px 5px #eee;
  border-radius: 0.25rem;
  outline: none;
`;

export default Input;
