import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../pages/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivatesRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRoutes = () => {
  const logged = false;

  return (
    <Router>
      <Switch>
        <PublicRoutes
          path="/login"
          component={LoginScreen}
          isAuthenticated={logged}
        />
        <PrivatesRoutes
          path="/"
          exac
          component={DashboardRoutes}
          isAuthenticated={logged}
        />
      </Switch>
    </Router>
  );
};
