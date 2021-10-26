import { useState } from "react";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { AppContext } from "./context/AppContext";

const App = () => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    user: null,
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <AppRoutes />
    </AppContext.Provider>
  );
};

export default App;
