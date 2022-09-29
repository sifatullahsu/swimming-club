import React from 'react';
import './Swimming.css';

const Swimming = (props) => {
  const {handleAddToList, swimming} = props;
  const {id, title, image, age, time} = swimming;

  return (
    <div className='swimming'>
      <div className='swimming-inner'>
        <img src={image} alt="" />
        <h3 className='title'>{title}</h3>
        <div className='age'>For Age: {age}</div>
        <div className='time'>Time Required: {time.timeValue + time.timeType}</div>
        <button onClick={() => handleAddToList({id, time, qty: 1})}>Add to List</button>
      </div>
    </div>
  );
};

export default Swimming;