import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({exerciseDetails}) => {
  const [exerciseTime, setExerciseTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  
  let exerciseTimeTotal = 0;
  let breakTimeTotal = 0;

  for (const exerciseItem of exerciseDetails) {
    console.log(exerciseItem);
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-calculation'>
        <div className='add-a-break'>
          <h3>Add A Break</h3>
          <div>
            <button>10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
            <button>50s</button>
            <button>60s</button>
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
            <span>{breakTime} seconds</span>
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