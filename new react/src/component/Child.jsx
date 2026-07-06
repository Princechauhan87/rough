import React from 'react';

const Child = (props) => {
    console.log(props)
  return (
    <>
      <h2>This is the Child Component</h2>
      <h2>welcome {props.fname}</h2>
    </>
  );
};

export default Child;