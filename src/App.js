import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home/home';
import anxiety from './pages/anxiety/anxiety';
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
    <Provider store={store}>
     <Router>


<Switch>
<Route  exact path="/home" component={home} />
<Route exact path="/anxiety" component={anxiety}/>

</Switch>

 </Router>
 </Provider>
    </>
  );
}

export default App;
