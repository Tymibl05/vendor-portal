import React, { useState } from 'react';

export const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (e) => {
    setToggle(!toggle);
  };
  return (
    <div className={toggle ? 'toggle' : ''} onClick={toggleHandler}>
      {children}
    </div>
  );
};
