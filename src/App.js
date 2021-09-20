import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home/home';
function App() {
  return (
    <>
     <Router>


<Switch>
<Route  exact path="/home" component={home} />

</Switch>

 </Router>

    </>
  );
}

export default App;
