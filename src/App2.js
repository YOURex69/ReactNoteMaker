import React, { useState } from 'react';

const Display = (props) => {
  return <div>{props.counter}</div>;
};
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App2 = () => {
  const [counter, setCounter] = useState(0);

  const plusOne = () => {
    setCounter(counter + 1);
  };
  const subsOne = () => {
    setCounter(counter - 1);
  };
  const Reset = () => {
    setCounter(0);
  };

  //const handleClick = () => {
  //setCounter(counter + 1);
  // };
  // const Reset = () => {
  //  setCounter(0);
  // };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={plusOne} text='plus 1' />
      <Button onClick={Reset} text='Reset' />
      <Button onClick={subsOne} text='subs 1' />
    </div>
  );
};

export default App2;
