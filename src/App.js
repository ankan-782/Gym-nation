import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services/Services';
import SingleServiceDetails from './pages/Services/SingleServiceDetails/SingleServiceDetails';
import Workouts from './pages/Workouts/Workouts/Workouts';
import Team from './pages/Trainers/Team/Team';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import Login from './pages/Authentication/Login/Login';
import Registration from './pages/Authentication/Registration/Registration';
import LoginRoute from './pages/Authentication/LoginRoute/LoginRoute';

function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceDetails/:singleServiceID">
              <SingleServiceDetails></SingleServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/workouts">
              <Workouts></Workouts>
            </PrivateRoute>
            <PrivateRoute path="/trainers">
              <Team></Team>
            </PrivateRoute>
            <LoginRoute path="/login">
              <Login></Login>
            </LoginRoute>
            <LoginRoute path="/register">
              <Registration></Registration>
            </LoginRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
