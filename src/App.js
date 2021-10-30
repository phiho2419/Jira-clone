import '../src/scss/main.css'
import { Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import UserTemplate from './templates/UserTemplate';
import LoginForm from './pages/login/LoginForm';
import SignupForm from './pages/signup/SignupForm';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <UserTemplate path="/login" exact component={LoginForm} />
          <UserTemplate path="/signup" exact component={SignupForm} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
