import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SwimmingBlocks from './components/SwimmgingBlocks/SwimmingBlocks';

function App() {

  const [exerciseDetails, setExerciseDetails] = useState([]);

  const handleAddToList = (swimmingInfo) => {
    setExerciseDetails([...exerciseDetails, swimmingInfo]);
  }

  return (
    <div>
      <div className="swimming-comtainer">
        <SwimmingBlocks handleAddToList={handleAddToList}></SwimmingBlocks>
        <Sidebar exerciseDetails={exerciseDetails}></Sidebar>
      </div>
    </div>
  );
}

export default App;
