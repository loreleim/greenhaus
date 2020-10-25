import React, {useCallback} from "react";
import firebase from "../../database/firebase";
import style from "./index.module.scss";

const Signup = () => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, passwordConfirm, name } = event.target.elements;
      if (password.value !== passwordConfirm.value) {
        return alert("passwords do not match")
      }
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
      } catch (error) {
        alert(error);
      }
    }
  );

  return (
<div className={style.signupContainer}>
        <section className={style.backgroundBlur}>
          <div className={style.popupContainer}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
          <div className={style.signupInput}>
                <input name="name" type="text" required
                    autoComplete="off"/>
                <label>Name</label>
            </div>
            <div className={style.signupInput}>
                <input name="email" type="email" required
                    autoComplete="off"/>
                <label>Email</label>
            </div>
            <div className={style.signupInput}>
                <input name="password" type="password" required />
                <label>Password</label>
            </div>
            <div className={style.signupInput}>
                <input name="passwordConfirm" type="password" required />
                <label>Confirm Password</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
          </div>
        </section>
      </div>
  );
}

export default Signup;


/*class Signup extends React.Component {

  render() {

    return (
      <div className={style.signupContainer}>
        <section className={style.backgroundBlur}>
          <div className={style.popupContainer}>
          <h2>Sign Up</h2>
          <form>
            <div className={style.signupInput}>
                <input name="email" type="email" required
                    autoComplete="off"/>
                <label>Email</label>
            </div>
            <div className={style.signupInput}>
                <input name="password" type="password" required />
                <label>Password</label>
            </div>
            <div className={style.signupInput}>
                <input name="password" type="password" required />
                <label>Confirm Password</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;*/