import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import OfferBody from './Components/Offer/OfferBody';
import Tour from './Components/Tour/Tour';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/offer">
            <OfferBody></OfferBody>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/tour">
            <Tour></Tour>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
