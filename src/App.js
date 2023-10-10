import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OTP from './components/OTP/OTP';



function App() {
  return (
    <Router>

      <Nav />

      <Switch>

        {/* <Home /> */}
        <Route path="/" exact>

          <div className="App">


            <header className="App-header content-left">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hello MKEY
              </p>

              <Home />


              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>

            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>

          </div>
        </Route>

        {/* <Product /> */}
        <Route path="/product">
          <Product />
        </Route>

        <Route path="/weather">
          <div>Hello Weather</div>
        </Route>

        <Route path="/about">
          {/* <Users /> */}
        </Route>

        <Route path="/otp">
          <OTP />
        </Route>

        <Route path="*">
          <div>404 NOT FOUND !</div>
        </Route>
      </Switch>



    </Router>
  );
}

export default App;
