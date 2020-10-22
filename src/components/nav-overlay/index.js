import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class NavOverlay extends PureComponent {
  render() {
    return (
      <div>
        <nav
          className={style.mainNav}
          style={{
            visibility: this.props.visibility,
            opacity: this.props.opacity,
            height: this.props.height,
          }}
        >
          <ul>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/friends"}>Friends</Link>
            </li>
            <li>
              <Link to={"/notifications"}>Notifications</Link>
            </li>
            <li>
              <Link to={"/reminders"}>Reminders</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>Wishlist</Link>
            </li>
            <li>
              <Link to={"/settings"}>Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}