import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SwimmingBlocks from './components/SwimmgingBlocks/SwimmingBlocks';

function App() {
  return (
    <div>
      <div className="swimming-comtainer">
        <SwimmingBlocks></SwimmingBlocks>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
