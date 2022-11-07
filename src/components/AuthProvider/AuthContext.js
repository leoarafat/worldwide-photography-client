import React, { createContext, useState } from "react";
import { app } from "../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth(app);
export const userContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    user,
    userRegister,
  };
  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default AuthContext;
