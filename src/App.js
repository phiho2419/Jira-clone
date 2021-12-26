import '../src/scss/main.css'
import {  Router, Route, Switch } from 'react-router-dom'
// import { Router } from 'react-router'
import UserTemplate from './templates/UserTemplate';
import LoginForm from './pages/login/LoginForm';
import SignupForm from './pages/signup/SignupForm';
import Home from './pages/home/Home';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import HomeTemplate from './templates/HomeTemplate';
import Board from './pages/board/Board';
import SettingPage from './pages/SettingPage/SettingPage';
import CreateProjectPage from './pages/CreateProjectPage/CreateProjectPage';
import { history } from './utils/history';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <LoadingComponent />  
        <Switch>

          <UserTemplate exact path="/login" component={LoginForm} />
          <UserTemplate exact path="/signup" component={SignupForm} />


          
          <HomeTemplate exact path="/board" component={Board}/>
          <HomeTemplate exact path="/setting" component={SettingPage}/>
          <HomeTemplate exact path="/createproject" component={CreateProjectPage}/>
          <HomeTemplate exact path="/" component={Home}/>


        </Switch>
      </Router>
    </div>

  );
}

export default App;
