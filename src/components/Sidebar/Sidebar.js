import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({exerciseDetails}) => {
  let exerciseTime = 0;
  const [breakTime, setBreakTime] = useState([]);

  for (const exerciseItem of exerciseDetails) {
    exerciseTime = exerciseTime + exerciseItem.time.timeValue * exerciseItem.qty;
  }

  const handleBreakTime = (data) => {
    setBreakTime(data);
  }

  

  return (
    <div className='sidebar'>
      <div className='sidebar-calculation'>
        <div className='add-a-break'>
          <h3>Add A Break</h3>
          <div>
            <button onClick={() => handleBreakTime({id: 1, value: 10})}>10s</button>
            <button onClick={() => handleBreakTime({id: 2, value: 20})}>20s</button>
            <button onClick={() => handleBreakTime({id: 3, value: 30})}>30s</button>
            <button onClick={() => handleBreakTime({id: 4, value: 40})}>40s</button>
            <button onClick={() => handleBreakTime({id: 5, value: 50})}>50s</button>
            <button onClick={() => handleBreakTime({id: 6, value: 60})}>60s</button>
          </div>
        </div>
        <div className='exercise-details'>
          <h3>Exercise Details</h3>
          <div>
            <span>Exercise time</span>
            <span>{exerciseTime} seconds</span>
          </div>
          <div>
            <span>Break time</span>
            <span>{breakTime.value ? breakTime.value : 0} seconds</span>
          </div>
        </div>
        <div className='activity-completed'>
          <button>Activity Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;