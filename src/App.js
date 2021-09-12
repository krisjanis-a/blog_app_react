import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { Contacts } from "./pages/Contacts/Contacts";
import Donate from "./pages/Donate/Donate";
import Resources from "./pages/Resources/Resources";
import Help from "./pages/Help/Help";
import { useContext } from "react";
import { Context } from "./context/Context";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/post/">
            <Single />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
