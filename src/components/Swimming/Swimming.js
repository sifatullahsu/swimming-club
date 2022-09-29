import React from 'react';
import './Swimming.css';

const Swimming = (props) => {
  console.log(props.swimming);

  const {id, title, image, age, time} = props.swimming;

  return (
    <div className='swimming'>
      <div className='swimming-inner'>
        <img src={image} alt="" />
        <h3 className='title'>{title}</h3>
        <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className='age'>For Age: {age}</div>
        <div className='time'>Time Required: {time.timeValue + time.timeType}</div>
        <button>Add to List</button>
      </div>
    </div>
  );
};

export default Swimming;