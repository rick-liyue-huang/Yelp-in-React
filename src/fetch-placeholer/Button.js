import React from 'react';

const buttonStyle = {
  width: '33.33%',
  padding: '0.25rem',
  fontSize: '1rem',
};

const Button = ({buttonText, reqType, setReqType}) => {
  return (
    <button
      style={buttonStyle}
      className={buttonText === reqType ? 'selected' : 'disabled'}
      type={'button'}
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
