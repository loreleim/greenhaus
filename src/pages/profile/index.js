import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

class Profile extends React.Component {

  constructor(props) {
    super();
    this.state = {
      user: [],
    };
  }

  handleChange = (e) => {
    this.setState({ searchItem: e.target.value });
    console.log(this.state.searchItem);
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className={style.mainContainer}>
        <section>
          <h2>Profile</h2>
          {this.state.user}
        </section>
      </div>
    );
  }
}

export default Profile;