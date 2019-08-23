import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import CalendarDay from './components/Calendar/CalendarDay/CalendarDay';
import NotFound from './components/NotFound/NotFound';
import MainHeader from './components/general/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">
      

      <MainHeader/>


      <Switch>

        <Route path="/" exact component={Home}/>
        
        <Route path="/calendar" exact component={CalendarDay}/>

        <Route path="*" component={NotFound}/>
        
      </Switch>

    </div>
  );
}

export default App;
