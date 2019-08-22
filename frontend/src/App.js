import React from 'react';

import { Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import CalendarDay from './components/Calendar/CalendarDay/CalendarDay';

function App() {
  return (
    <div className="App">
      


      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar">
                Calendar
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>


        <Route path="/" exact component={Home}/>
        <Route path="/calendar" exact component={CalendarDay}/>

    </div>
  );
}

export default App;
