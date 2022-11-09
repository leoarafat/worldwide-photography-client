import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/solid";
import { userContext } from "../AuthProvider/AuthContext";

const NavBar = () => {
  const { user, logOut } = useContext(userContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allService">All Service</Link>
            </li>
            {user?.email && (
              <>
                <li>
                  <Link to="/myReview">My Review</Link>
                </li>
                <li>
                  <Link to="/addService">Add Service</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <CameraIcon className="h-6 w-6 text-blue-500" />
          AP Photography
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allService">All Service</Link>
          </li>
          {user?.email && (
            <>
              <li>
                <Link to="/myReview">My Review</Link>
              </li>
              <li>
                <Link to="/addService">Add Service</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid || user?.email ? (
          <>
            <button className="btn btn-ghost" onClick={handleLogOut}>
              Logout
            </button>
          </>
        ) : (
          <Link className="btn btn-outline btn-primary" to="/login">
            Login
          </Link>
        )}

        {/* <Link className="btn btn-outline btn-secondary ml-1" to="/register">
          Register
        </Link> */}
      </div>
    </div>
  );
};

export default NavBar;
