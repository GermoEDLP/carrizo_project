import { useEffect, useState } from "react";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { AppContext } from "./context/AppContext";
import { ToastContext } from "./context/ToastContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    user: null,
  });

  const [toastData, setToast] = useState(null);

  const createToast = (data) => {
    if (data !== null) {
      if (data.style === "success") {
        toast.success(data.message);
        return;
      }
      if (data.style === "error") {
        toast.error(data.message);
        return;
      }
    }
  };

  useEffect(() => {
    createToast(toastData);
    setToast(null);
  }, [toastData]);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <ToastContext.Provider value={{ toastData, setToast }}>
        <ToastContainer />
        <AppRoutes />
      </ToastContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
