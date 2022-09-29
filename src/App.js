import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SwimmingBlocks from './components/SwimmgingBlocks/SwimmingBlocks';
import { addToDb, getStoredSwimming } from './Utilities/Utilities';

function App() {

  const getSwimming = getStoredSwimming();
  // console.log(getSwimming);

  const [exerciseDetails, setExerciseDetails] = useState(getSwimming);


  const handleAddToList = (swimmingInfo) => {
    let newCart = [];
    const exists = exerciseDetails.find(item => item.id === swimmingInfo.id);

    if(!exists) {
      newCart = [...exerciseDetails, swimmingInfo];
    }
    else {
      const rest = exerciseDetails.filter(item => item.id !== swimmingInfo.id);
      exists.qty = exists.qty + 1;

      newCart = [...rest, exists];
    }

    setExerciseDetails(newCart);
    addToDb(newCart);
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
