import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <p>Switch is {isOn ? 'On' : 'Off'}</p>
      <button onClick={toggleSwitch}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;
