import React, { useState } from 'react';
import { getBreakTime, putBreakTime } from '../../Utilities/Utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Sidebar.css';


const Sidebar = ({exerciseDetails}) => {
  let exerciseTime = 0;

  const getBreak = getBreakTime();
  const [breakTime, setBreakTime] = useState(getBreak);

  for (const exerciseItem of exerciseDetails) {
    exerciseTime = exerciseTime + exerciseItem.time.timeValue * exerciseItem.qty;
  }

  const handleBreakTime = (data) => {
    setBreakTime(data);
    putBreakTime(data);
  }

  const notify = () => {
    toast("Congratulations, activity updated.", {position: toast.POSITION.TOP_LEFT});
  };

  return (
    <div className='sidebar'>
      <div className='user-info'>
        <span><small>personal info</small></span>
        <h3>Sifat Ullah</h3>
        <p>Dhaka, Bangladesh</p>
        <p>Manarat International University at the department of CSE, 9th semester.</p>
      </div>
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
          <button className='btn' onClick={notify}>Activity Completed</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;