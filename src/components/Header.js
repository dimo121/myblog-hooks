import axios from "axios";
import { connect } from 'react-redux';
import LoginModal from "./LoginModal";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RegisterModal from "./RegisterModal";
import { setCurrentUser, startSetUser, deleteCurrentUser } from "../actions/users";

//redux currentUser is not persisting. Still loading user from useEffect and setting token to localStorage

const Header = (props) => {

  const [loginMod, setLogin] = useState(undefined);
  const [registerMod, setRegister] = useState(undefined);
  const [loggedIn, setUser] = useState(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('jwtoken');

    if(token) {
      setUser(true);
      props.startSetUser(token);
    }
  }, []);


  const clearModal = () => {
    setLogin(undefined);
    setRegister(undefined);
  };

  const buttonOption = () => {
    if (loggedIn) {
      setUser(undefined);
      localStorage.clear();
      props.deleteCurrentUser();
    } else {
      setLogin(true);
    }
  };

  const registerModal = () => {
    setLogin(undefined);
    setRegister(true);
  };

  const onSubmission = () => {
    const url = loginMod
      ? "http://localhost:3000/users/login"
      : "http://localhost:3000/users";

    axios({
      url,
      method: "POST",
      data: {
        email,
        password,
        name,
      },
    })
      .then((response) => {
        props.setCurrentUser({
          id : response.data.user._id,
          name : response.data.user.name,
        });
        localStorage.setItem("jwtoken", response.data.token);
        setError(undefined);
        setUser(true);
        clearModal();
      })
      .catch(() => {
        const errMsg = loginMod
          ? "Wrong email and password combination"
          : "Email already being used";
        setError(errMsg);
      });
  };

  return (
    <div className="nav__container">
      <div className="nav__title">ReactJS Blog</div>
      <ul>
        <li>
          {loggedIn && <NavLink className="nav__links" to="/" exact={true}>
            Dashboard
          </NavLink>}
        </li>
        <li>
          {loggedIn && <NavLink className="nav__links" to="/createblog">
            Create blog
          </NavLink>}
        </li>
        <li>
          {loggedIn && <NavLink className="nav__links" to={`/myblogs/${props.filters.currentUser.id}`}>
            My blogs
          </NavLink>}
        </li>
        <li>
          {loggedIn && (
            <div className="nav__log">
              <p>Logged in as:</p>
              <p>{props.filters.currentUser.name}</p>
            </div>
          )}
        </li>
        <li>
          <button onClick={buttonOption}>
            {loggedIn ? "Sign Out" : "Sign In"}
          </button>
        </li>
      </ul>
      <LoginModal
        selectedOption={loginMod}
        clearModal={clearModal}
        registerModal={registerModal}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmission={onSubmission}
        error={error}
      />
      <RegisterModal
        selectedOption={registerMod}
        clearModal={clearModal}
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
        onSubmission={onSubmission}
        error={error}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  startSetUser : (token) => dispatch(startSetUser(token)),
  deleteCurrentUser : () => dispatch(deleteCurrentUser()),
  setCurrentUser : (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)