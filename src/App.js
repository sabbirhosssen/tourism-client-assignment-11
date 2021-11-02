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
import HotelBody from './Components/Hotel/HotelBody/HotelBody';
import Signup from './Components/Signup/Signup';
import TourBook from './Components/Page/TourBook/TourBook';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OfferBook from './Components/Page/OfferBook/OfferBook';
import TourShiping from './Components/Page/TourShiping/TourShiping';
import AllOrder from './Components/Page/Order/AllOrder';
import ClientOrder from './Components/Page/ClientOrder/ClientOrder';



function App() {
  return (
    <div className="App m-0">
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
            <Route path="/tour">
              <Tour></Tour>
            </Route>
            <Route path="/hotel">
              <HotelBody></HotelBody>
            </Route>
            <Route path="/offer">
              <OfferBody></OfferBody>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/tourShiping">
              <TourShiping></TourShiping>
            </Route>

            <PrivateRoute path="/tourBook/:tourId">
              <TourBook></TourBook>
            </PrivateRoute>
            <PrivateRoute path="/allOrder">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute path="/offerBook/:offerId">
              <OfferBook></OfferBook>
            </PrivateRoute>
            <PrivateRoute path="/clientOrder">
              <ClientOrder></ClientOrder>
            </PrivateRoute>


            <Route exact path="*">
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
