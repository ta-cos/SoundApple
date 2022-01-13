import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginFormModal from "./components/LoginFormModal";
import SignUpFormModal from "./components/SignUpFormModal";
import LeftMenu from "./components/LeftMenu";
import Songs from "./components/Songs"
import SongDetails from "./components/SongDetails";
import MyMusic from "./components/MyMusic";
import Home from "./components/Home"
import NotFound from "./components/NotFound";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <LeftMenu isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/library">
            <Songs />
          </Route>
          <Route exact path="/my-music">
            <MyMusic />
          </Route>
          <Route exact path="/login">
            <LoginFormModal />
          </Route>
          <Route exact path="/signup">
            <SignUpFormModal />
          </Route>
          <Route exact path="/library/:id">
            <SongDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      )
      }
    </>
  );
}

export default App;
