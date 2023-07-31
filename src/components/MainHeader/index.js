import { useState, useEffect, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../store/slices/authSlice";

import styles from "./style.module.scss";
const { header, menuItems, userDropdown, userDropdownList, loginBtn } = styles;

function MainHeader() {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [dropdown, setDropdown] = useState(false);
  const user = useSelector((state) => state.user.user);

  function handleLogout() {
    dispatch(authActions.logout());
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      const el = dropdownRef?.current

      if (!el || el.contains(e.target)) {
        return;
      }

      el.style.display = "none";
    });
  }, []);

  return (
    <div
      className={header}
      style={{
        background: (pathname === "/" || pathname.includes("/room"))
          ? "linear-gradient(to right, #a517ba, #5f1782)"
          : "rgba(227, 202, 254, 0.9)"
      }}
    >
      <div className={menuItems}>
        <Link style={{ color: (pathname === "/" || pathname.includes("/room")) ? "white" : "black" }} to="/">Filend</Link>
        <Link style={{ color: (pathname === "/" || pathname.includes("/room")) ? "white" : "black" }} to="/chat">Chat Me Up</Link>
        <Link style={{ color: (pathname === "/" || pathname.includes("/room")) ? "white" : "black" }} to="/video-meeting">Meet Me Up</Link>
      </div>

      {user ? (
        <div
          className={userDropdown}
          onClick={() => setDropdown((prev) => !prev)}
        >
          <img
            alt="User Profile"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`}
          />
          <BiSolidDownArrow style={{ color: (pathname === "/" || pathname.includes("/room")) ? "white" : "black" }} />

          {dropdown && (
            <div ref={dropdownRef} className={userDropdownList}>
              <Link to="/profile">Profile</Link>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          className={loginBtn}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default MainHeader;