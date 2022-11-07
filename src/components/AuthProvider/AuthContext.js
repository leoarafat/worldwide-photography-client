import React, { createContext, useState } from "react";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
export const userContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const userInfo = {
    user,
  };
  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default AuthContext;
