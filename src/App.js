import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
import CityRoutes from "./pages/CityRoutes";
import CityMap from "./pages/CityMap";
import { useLocation } from "react-router-dom";
import "./App.css";
function App() {
  // const location = useLocation();
  // const { locations } = location.state || {};
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/main" component={CityMap} />
        <Route path="/maps" component={Main} />
        {/* <Route
          exact
          path="/multiple-markers-map"
          render={() => <MultipleMarker locations={locations} />}
        />{" "} */}
      </Switch>
    </Router>
  );
}

export default App;
