import React from "react";
import style from "./index.module.scss";
import Signup from "../signup";

class Forum extends React.Component {

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
      <div className={style.mainContainer}>
        <section>
          <h2>Forums</h2>
          <Signup></Signup>
        </section>
      </div>
    );
  }
}

export default Forum;