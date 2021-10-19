import React from 'react';

const Hello = (props) => {
  const { name, age } = props;
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello {name} age is {age}!!
      </p>
      <p>you were born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const man_1 = 'peter';
  return (
    <div>
      <p>Hello world, time is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name='abhay' age={24} />
      <Hello name='aman' age={b} />
      <Hello name={man_1} age={a + b} />
    </div>
  );
};

export default App;
