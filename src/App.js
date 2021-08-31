import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const user = true;
  // const user = false;

  return (
    <>
      <Router>
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
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/post/">
            <Single />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
