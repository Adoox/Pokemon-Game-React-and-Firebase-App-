import './App.css';
import Signup from './component/Signup'
import Login from './component/Login'
import NavBar from './component/Navbar'
import PokemonList from './component/PokemonList'
import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap' 

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={PokemonList}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </AuthProvider>
       </Router>
    </>
  );
}

export default App;
