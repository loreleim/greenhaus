import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class Nav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
          <nav className={style.navContainer}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/forum"}>Forum</Link>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li onClick={this.props.drawerClickHandler}>Hamburg
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}