import React from "react";

import "./Auth.css";
import {useDispatch} from "react-redux";
import {authActions} from "../store/auth-slice";

const Auth = () => {
    //notice calling dispatch outside the component shows error
    const dispatch = useDispatch();

    function handleLoginDetails(e) {
        e.preventDefault();
        const id = document.getElementById("id").value;
        const password = document.getElementById("password").value;
        console.log(id, password);
        dispatch(authActions.login({id:id, password:password}));
    }

    return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleLoginDetails}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
