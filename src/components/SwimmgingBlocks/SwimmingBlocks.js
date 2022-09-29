import React, { useEffect, useState } from 'react';
import './SwimmingBlocks.css';

const SwimmingBlocks = () => {

  const [swimming, setSwimming] = useState([]);

  useEffect( () => {
    fetch('swimming.json')
    .then(res => res.json())
    .then(data => setSwimming(data))
  }, [])

  return (
    <div className='swimming-blocks'>
      <h3 className='site-title'>Swimmging Club</h3>
      
    </div>
  );
};

export default SwimmingBlocks;