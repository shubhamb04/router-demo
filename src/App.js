import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./components/About";
import Profile from "./pages/profile/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./pages/profile/Info";
import Settings from "./pages/profile/Settings";
import ServicesList from "./pages/services/ServicesList";
import ServiceDetails from "./pages/services/ServiceDetails";
function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/profile/info">
          <Info />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
        <Route exact path="/services">
          <ServicesList />
        </Route>
        <Route path="/services/:serviceId">
          <ServiceDetails />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
