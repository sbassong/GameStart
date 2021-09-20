import './styles/App.css';
import {Route, Switch} from 'react-router-dom'

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
