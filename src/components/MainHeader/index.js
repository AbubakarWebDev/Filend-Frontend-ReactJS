import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../store/slices/authSlice";

import styles from "./style.module.scss";
const { header, menuItems, userDropdown, userDropdownList, loginBtn } = styles;

function MainHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [dropdown, setDropdown] = useState(false);

  function handleLogout() {
    dispatch(authActions.logout());
    navigate("/login", { replace: true });
  }

  return (
    <div className={header}>
      <div className={menuItems}>
        <Link to="/">Filend</Link>
        <Link to="/chat">Chat Me Up</Link>
        <Link to="/video-meeting">Meet Me Up</Link>
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
          <BiSolidDownArrow />

          {dropdown && (
            <div className={userDropdownList}>
              <Link to="/profile">Profile</Link>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className={loginBtn}
          type="button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default MainHeader;
