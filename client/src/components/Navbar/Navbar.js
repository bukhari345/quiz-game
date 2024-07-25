import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";
import globe from "../../assets/globe.svg";
import logo from "../../assets/logo.png";
import { changeLanguage } from "../../actions/language";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const socket = useSelector((state) => state.socket.socket);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
    socket?.disconnect();
  };

  useEffect(() => {
    const token = user?.accessToken;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles["menu-right"]}>
          <ul className={styles.nav__list}>
            <li className={styles["nav__list-logo"]}>
              {user?.result?.userType === "Teacher" ? (
                <button>Teacher Side</button>
              ) : (
                <button>Student Side</button>
              )}
            </li>
            {user?.result?.userType !== "Teacher" && (
              <li className={styles.button}>
                <Link to="/practice">
                  <div className={styles["div"]}>Quiz Practice</div>
                </Link>
              </li>
            )}

            <li className={styles["nav__list-item"]}>
              <ul className={styles["nav__list-item-drop"]}>
                <li>
                  <Link to="/quizes">
                    {isLanguageEnglish ? "Public quizes" : "Publiczne quizy"}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles["menu-left"]}>
          <ul className={styles.nav__list}>
            {/* <li className={styles["nav__list-item"]}>
              {isLanguageEnglish ? "Contact" : "Kontakt"}
            </li> */}
            <li className={styles["nav__list-item"]}>
              <a href="http://localhost:3030" target="_blank">
                Go to LMS
              </a>
            </li>
            {user ? (
              <>
                {/* <li className={styles["nav__list-item"]}>
                  <Link to="/games/joingame">
                    {isLanguageEnglish ? "Play" : "Graj"}
                  </Link>
                </li> */}
                {/* {user.result.userType === "Teacher" && (
                  <li className={styles["nav__list-item"]}>
                    <Link to="/myquizes">
                      {isLanguageEnglish ? "My Quizes" : "Moje Quizy"}
                    </Link>
                  </li>
                )} */}
                <li className={styles["nav__list-item"]}>
                  {user.result.firstName}
                </li>
                <li onClick={logout} className={styles["nav__list-item"]}>
                  {isLanguageEnglish ? "Log out" : "Wyloguj"}
                </li>
              </>
            ) : (
              <Link to="/auth" className={styles["nav__list-item"]}>
                {isLanguageEnglish ? "Log in" : "Zaloguj"}
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
