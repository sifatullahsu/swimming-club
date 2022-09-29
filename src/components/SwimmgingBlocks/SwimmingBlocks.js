import React, { useEffect, useState } from 'react';
import Que from '../Que/Que';
import Swimming from '../Swimming/Swimming';
import './SwimmingBlocks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons'

const SwimmingBlocks = ({handleAddToList}) => {

  const [swimmingBlocks, setSwimmingBlocks] = useState([]);
  
  useEffect( () => {
    fetch('swimming.json')
    .then(res => res.json())
    .then(data => setSwimmingBlocks(data))
  }, []);

  return (
    <div className='swimming-blocks'>
      
      <h2 className='site-title'><FontAwesomeIcon icon={faPersonSwimming} /> Swimmging Club</h2>
      <p style={{marginBottom: '20px'}}>Select swimming types that you need to do.</p>
      <div className='swimming-types'>
        {swimmingBlocks.map(swimming => <Swimming swimming={swimming} handleAddToList={handleAddToList} key={swimming.id}></Swimming>)}
      </div>
      <Que></Que>
    </div>
  );
};

export default SwimmingBlocks;