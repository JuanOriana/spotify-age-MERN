import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import FetchPage from "./pages/FetchPage/FetchPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/analysis" component={FetchPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
