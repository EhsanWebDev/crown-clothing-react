import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Auth from "./pages/auth/Auth";

import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  state = {
    user: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user });

      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.user} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
