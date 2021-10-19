import React, { useState } from 'react';

const App3 = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);

  const handleclickLeft = () => {
    setClicks({
      left: clicks.left + 1,
      right: clicks.right,
    });
    setAll(allClicks.concat('L'));
  };
  const handleclickRight = () => {
    setClicks({
      left: clicks.left,
      right: clicks.right + 1,
    });
    setAll(allClicks.concat('R'));
  };

  return (
    <div>
      <p>{clicks.left}</p>
      <button onClick={handleclickLeft}>left</button>
      <p>{clicks.right}</p>
      <button onClick={handleclickRight}>right</button>
      <p>{allClicks.join(' ')}</p>
    </div>
  );
};

export default App3;
