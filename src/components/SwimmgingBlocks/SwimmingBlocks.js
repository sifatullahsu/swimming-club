import React, { useEffect, useState } from 'react';
import Swimming from '../Swimming/Swimming';
import './SwimmingBlocks.css';

const SwimmingBlocks = ({handleAddToList}) => {

  const [swimmingBlocks, setSwimmingBlocks] = useState([]);
  
  useEffect( () => {
    fetch('swimming.json')
    .then(res => res.json())
    .then(data => setSwimmingBlocks(data))
  }, []);

  return (
    <div className='swimming-blocks'>
      <h3 className='site-title'>Swimmging Club</h3>
      <div className='swimming-types'>
        {swimmingBlocks.map(swimming => <Swimming swimming={swimming} handleAddToList={handleAddToList} key={swimming.id}></Swimming>)}
      </div>
    </div>
  );
};

export default SwimmingBlocks;