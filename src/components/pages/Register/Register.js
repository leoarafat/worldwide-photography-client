import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";

const Register = () => {
  const [error, seterror] = useState("");
  const [success, setSuccess] = useState(false);
  const { userRegister } = useContext(userContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userRegister(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
      <form
        onSubmit={handleRegister}
        action=""
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid"
      >
        <label for="username" className="self-start text-xs font-semibold">
          Email
        </label>
        <input
          id="username"
          name="email"
          type="text"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400"
        />
        <label for="password" className="self-start mt-3 text-xs font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
        >
          Register
        </button>
        <div className="flex justify-center mt-6 space-x-2 text-xs">
          <Link to="/" className="dark:text-gray-400">
            Forgot Password?
          </Link>
          <span className="dark:text-gray-400">/</span>
          <Link to="/" className="dark:text-gray-400"></Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
