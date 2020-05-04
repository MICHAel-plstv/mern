import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NavBar = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();

    history.push("/");
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: "0 2rem" }}>
        <span className="brand-logo">Сокращение ссылки</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to={"/create"}>Создать</NavLink>
          </li>

          <li>
            <NavLink to={"/links"}>Ссылки</NavLink>
          </li>

          <li>
            <a href={"/"} onClick={handleLogout}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
