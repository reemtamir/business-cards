import React, { useState } from 'react';

const Clock = () => {
  let clockIntervalId;
  const [hourToShow, setHourToShow] = useState('');
  clockIntervalId = setInterval(() => {
    setHourToShow(new Date().toLocaleTimeString());
  }, 1000);
  return <p className="clock">{hourToShow}</p>;
};

export default Clock;
