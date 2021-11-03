import '../src/scss/main.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Router } from 'react-router'
import UserTemplate from './templates/UserTemplate';
import LoginForm from './pages/login/LoginForm';
import SignupForm from './pages/signup/SignupForm';
import Home from './pages/home/Home';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';


function App() {
  return (
    <div className="App">
      <Router >
        <LoadingComponent />
        <Switch>
          <UserTemplate exact path="/signin" component={LoginForm} />
          <UserTemplate exact path="/signup" component={SignupForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
