import React from 'react';
import Button from "./Button";

const formStyle = {
  width: '100%',

}
const Form = ({reqType, setReqType}) => {
  return (
    <form
      style={formStyle}
      onSubmit={e => e.preventDefault()}>
      <Button
        buttonText={"users"}
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText={"posts"}
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button
        buttonText={"comments"}
        reqType={reqType}
        setReqType={setReqType}
      />
    </form>
  );
};

export default Form;
