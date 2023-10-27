import { useState } from 'react';

export function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`toggle-switch ${isToggled ? 'is-on' : ''}`}
      onClick={toggleSwitch}>
      <div className="slider">
        <div className={`switch ${isToggled ? 'is-on' : ''}`} />
      </div>
      <span className="state-label">{isToggled ? 'ON' : 'OFF'}</span>
    </div>
  );
}
