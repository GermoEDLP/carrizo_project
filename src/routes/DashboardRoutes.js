import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "../components/ui/NavBar";
import { SideBar } from "../components/ui/SideBar";
import { ClientScreen } from "../pages/dashboard/ClientScreen";
import { HomeScreen } from "../pages/dashboard/HomeScreen";
import { OdontoScreen } from "../pages/dashboard/OdontoScreen";
import { TipoScreen } from "../pages/dashboard/TipoScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <div id="wrapper">
          <SideBar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar />

              <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <Switch>
                  <Route path="/" exact component={HomeScreen} />
                  <Route path="/clients" component={ClientScreen} />
                  <Route path="/odonto" component={OdontoScreen} />
                  <Route path="/tipo" component={TipoScreen} />

                  <Redirect to="/" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
