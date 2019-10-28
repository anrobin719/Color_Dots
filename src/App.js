import React, { useContext } from "react";
import Colors from "./components/Colors";
import { AuthContext } from "./context/auth-context";
import Auth from "./components/Auth";

const App = () => {
  const authContext = useContext(AuthContext);

  let contents = <Auth />;
  if (authContext.isAuth) {
    contents = <Colors />;
  }
  return contents;
};

export default App;
