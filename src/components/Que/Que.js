import React from 'react';
import './Que.css';

const Que = () => {
  return (
    <div className='que'> 
      <div>
        <h2>How does react JS work?</h2>
        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering our code.</p>
      </div>

      <div>
        <h2>What's the difference between props and state?</h2>
        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
      </div>

      <div>
        <h2>What is useEffect used for, except load data from api?</h2>
        <p>By using useEffect Hook, we tell React that our component needs to do something after render. React will remember the function you passed and call it later after performing the DOM updates. This is why we can load json data & API data. We can set dependency here. like, rendar on state change or props change.</p>
      </div>
    </div>
  );
};

export default Que;