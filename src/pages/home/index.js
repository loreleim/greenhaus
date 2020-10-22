import React from "react";
import style from "./index.module.scss";

class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      string: "",
      int: 0,
      array: [],
      userInput: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchItem: e.target.value });
    console.log(this.state.searchItem);
  };

  render() {
    return (
      <div className={style.homeContainer}>
        <section className={style.helloContainer}>
          <h2>Good Morning</h2>
        </section>
        <section className={style.notifContainer}>
            <h2>Notifications</h2>
        </section>
        <section className={style.reminderContainer}>
            <h2>Reminders</h2>
        </section>
        <section className={style.plantContainer}>
            <h2>My Plants</h2>
        </section>
        <div className={style.spacer}></div>
      </div>
    );
  }
}

export default Home;