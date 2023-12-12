import React from 'react';

const ReverseGreetings = (props) => {
  const { name } = props;
  const reversedName = name.split('').reverse().join('');

  return (
    <div>
      <h1>Hello, {reversedName}!</h1>
    </div>
  );
};

export default ReverseGreetings;
