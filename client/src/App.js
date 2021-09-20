import './styles/App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Switch>
      </main>
    </div>
  );
}

export default App;
