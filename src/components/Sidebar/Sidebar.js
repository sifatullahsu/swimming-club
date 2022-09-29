import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
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
            <span>200 seconds</span>
          </div>
          <div>
            <span>Break time</span>
            <span>10 seconds</span>
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