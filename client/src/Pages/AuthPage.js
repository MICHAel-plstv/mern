import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
  const { loading, request, error, clearError } = useHttp();
  const message = useMessage();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerhandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (error) {}
  };

  const loginhandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      login(data.token, data.userId);
    } catch (error) {}
  };

  return (
    <div className={"row"}>
      <div className={" col s6 offset-s3"}>
        <h1>Сократи ссылку</h1>

        <div className={"card blue-grey darken-1"}>
          <div className={"card-content white-text"}>
            <span className={"card-title"}>Авторизация</span>

            <div>
              <div className="input-field ">
                <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name={"email"}
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name={"password"}
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="password">Пароль</label>
              </div>
            </div>
          </div>

          <div className={"card-action"}>
            <button
              className={"btn yellow darken-4"}
              style={{ margin: " 0 10px 0 0" }}
              disabled={loading}
              onClick={loginhandler}
            >
              Войти
            </button>

            <button
              className={"btn grey lighten-1 black-text"}
              onClick={registerhandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
