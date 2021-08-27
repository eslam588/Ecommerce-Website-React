import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartIcon from "./Components/CartIcon";
import {Provider} from "react-redux";
import store from "./store/store";
import "./App.css";
// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Footer from './Components/footer';

function App() {
  return (
    <Router>
    
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            <a className="navbar-brand" href="#"><a><img src="images/logo.png" width="50px" /></a></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="items-link collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
              </ul>
            </div>

            <CartIcon />

        </div>
      </nav>

      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products} exact/>
      <Route path="/products/:id" component={Product} />
      <Route path="/cart" component={Cart} />

      <Footer />
    </Router>
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
