import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { EmployeeDashboard, Login, MainDashBoard } from './pages/pages'; //pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path='/employee/:employeeId'>
            <EmployeeDashboard />
          </Route>
          <Route exact path='/home' component={MainDashBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
