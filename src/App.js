import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home/home';
function App() {
  return (
    <>
     <Router>
 {/* <Nav/> */}

<Switch>
<Route  exact path="/home" component={home} />

</Switch>
 </Router>

    </>
  );
}

export default App;
