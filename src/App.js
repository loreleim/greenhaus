import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import style from "./style/index.scss";
import Nav from "./components/nav";
import NavOverlay from "./components/nav-overlay";
import Home from "./pages/home";
import Forum from "./pages/forum";
import Inventory from "./pages/inventory";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";

const App = withRouter(
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHit: true,
        butthole: 0,
        potato: "hidden",
        rice: "0%",
      };
    }

    componentDidUpdate(prevLocation) {
      if (this.props.location !== prevLocation.location) {
        this.onRouteChanged();
      }
    }

    onRouteChanged() {
      console.log("the route has been changed");
      this.setState((prevState) => ({
        isHit: !prevState.isHit,
      }));
      this.setState({ butthole: 0 });
      this.setState({ potato: "hidden" });
      this.setState({ rice: "0%" });
    }

    toggleOverlay = () => {
      const isHit = this.state.isHit;
      this.setState((prevState) => ({
        isHit: !prevState.isHit,
      }));
      if (isHit) {
        this.setState({ butthole: 1 });
        this.setState({ potato: "visible" });
        this.setState({ rice: "75vh" });
      } else {
        this.setState({ butthole: 0 });
        this.setState({ potato: "hidden" });
        this.setState({ rice: "0%" });
      }
    };

    render() {
      return (
        <div className={style.mainContainer}>
          <Nav drawerClickHandler={this.toggleOverlay}></Nav>
          <NavOverlay
            opacity={this.state.butthole}
            visibility={this.state.potato}
            height={this.state.rice}
          ></NavOverlay>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/forum" component={Forum}></Route>
              <Route path="/inventory" component={Inventory}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/profile" component={Profile}></Route>
            </Switch>
        </div>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <Router basename="/greenhaus">
        <App />
      </Router>
    );
  }
}

export default RoutedApp;