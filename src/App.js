import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from "react-redux";

import MainPanel from "./components/MainPanel";
import User from "./components/User";
import Checkout from "./components/Checkout";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import store from './redux/store'


class App extends React.Component {
  render() {
    const {book} = this.props;
    return (
        <Provider store={store}>
            <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" component={MainPanel} exact />
            <Route path="/User" component={User} />
            <Route path="/Checkout" component={Checkout} />
            <Route component={Error} />
          </Switch>
        </main>
            </BrowserRouter>
        </Provider>

    );
  }
}



export default App;
