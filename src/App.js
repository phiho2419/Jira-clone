import '../src/scss/main.css'
import { Switch, Router, Route, BrowserRouter } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import UserTemplate from './templates/UserTemplate';
import LoginForm from './pages/login/LoginForm';
import SignupForm from './pages/signup/SignupForm';
import Home from './pages/home/Home';


// export const history = createBrowserHistory();

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <UserTemplate exact path="/login"  component={LoginForm} />
          <UserTemplate exact path="/signup" component={SignupForm} />
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </div>
  );
}

export default App;
