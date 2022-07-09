import React, { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";

import MyNavbar from "./components/UI/navbar/MyNavbar";
import { AuthContext } from "./context";

import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      return;
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <div className="App-container">
        <MyNavbar />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
