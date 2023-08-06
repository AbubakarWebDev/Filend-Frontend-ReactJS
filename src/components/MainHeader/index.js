import { useState, useEffect, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsPersonVideo2, BsFillChatRightTextFill, BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../store/slices/authSlice";

import styles from "./style.module.scss";
const { header, menuItems, userDropdown, userDropdownList, loginBtn } = styles;

const navMenuItems = [
  {
    id: 1,
    route: "/",
    title: "Filend",
    Icon: BsFillFileEarmarkArrowDownFill
  },
  {
    id: 2,
    route: "/chat",
    title: "Chat Me Up",
    Icon: BsFillChatRightTextFill
  },
  {
    id: 3,
    route: "/video-meeting",
    title: "Meet Me Up",
    Icon: BsPersonVideo2
  },
];

function MainHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  const [dropdown, setDropdown] = useState(false);
  const user = useSelector((state) => state.user.user);

  function handleLogout() {
    dispatch(authActions.logout());
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      const el = dropdownRef?.current;

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
        background:
          pathname === "/" || pathname.includes("/room")
            ? "linear-gradient(to right, #a517ba, #5f1782)"
            : "rgba(227, 202, 254, 0.9)",
      }}
    >
      <div className={menuItems}>
        {navMenuItems.map(({ id, route, Icon, title }) => (
          <Link
            key={id}
            style={{
              color:
                pathname === "/" || pathname.includes("/room")
                  ? "white"
                  : "black",
            }}
            to={route}
          >
            <Icon className="mr-2" />
            { title }
          </Link>
        ))}
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
          <BiSolidDownArrow
            style={{
              color:
                pathname === "/" || pathname.includes("/room")
                  ? "white"
                  : "black",
            }}
          />

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
