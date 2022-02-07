import React from "react";

import "./loginScreen.css";
import logo from "../../assets/logo.png";
import { useForm } from "./../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [value, handleInputChange] = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(value));
  };
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__titleL">
          <h3>Iniciar Sesión</h3>
          <img className="form__logo" src={logo} alt="img" />
        </div>
        <div className="form__container">
          <label className="form__label">Escriba su usuario</label>
          <input
            className="form__input"
            type="text"
            placeholder="Username"
            name="username"
            value={value.username}
            onChange={handleInputChange}
          />
          <label className="form__label">Escriba su contraseña</label>
          <input
            className="form__input"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={value.password}
            onChange={handleInputChange}
          />
        </div>
        <button className="form__button"> Ingresar</button>
      </form>
    </div>
  );
};

export default LoginScreen;
