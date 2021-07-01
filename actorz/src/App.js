import Intropage from "./pages/Intropage";
import Mainpage from "./pages/Mainpage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Mypage from "./pages/Mypage";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Intropage} />
        <Switch>
          <Route path="/mainpage" component={Mainpage} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
