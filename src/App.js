import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { EmployeeDashboard } from './pages/pages'; //pages

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/employee/:employeeId'>
            <EmployeeDashboard />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
