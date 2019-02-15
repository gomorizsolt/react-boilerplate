import React, { useState, useEffect } from 'react';

const hooks = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName('You can not override me!');
  });

  return (
    <div>
      <p><b>Hooks</b></p>
      <input type="text" onChange={e => setName(`Hello ${e.target.value}!`)} />
      <p>{name}</p>
    </div>
  );
};

export default hooks;
