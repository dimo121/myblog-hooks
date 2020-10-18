import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

export default function Header() {
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
      axios({
        url: 'http://localhost:3000/users/me',
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setName(response.data.name)
          setUser(true);
        })
        .catch((error) => {
          console.log(error.response);
        });
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
        localStorage.setItem("jwtoken", response.data.token);
        setError(undefined);
        setUser(true);
        clearModal();
      })
      .catch((error) => {
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
          {loggedIn && (
            <div className="nav__log">
              <p>Logged in as:</p>
              <p>{name}</p>
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
