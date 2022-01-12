import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginFormModal from "./components/LoginFormModal";
import SignUpFormModal from "./components/SignUpFormModal";
import LeftMenu from "./components/LeftMenu";
import Upload from "./components/Upload"
import Songs from "./components/Songs"
import SongDetails from "./components/SongDetails";
import EditSongForm from "./components/SongEditForm";
import MyMusic from "./components/MyMusic";


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
          <Route exact path="/" />
          <Route exact path="/library">
            <Songs />
          </Route>
          <Route exact path="/my-music">
            <MyMusic />
          </Route>
          <Route path="/login">
            <LoginFormModal />
          </Route>
          <Route path="/signup">
            <SignUpFormModal />
          </Route>
          <Route path="/library/:id">
            <SongDetails />
          </Route>
          <Route><h1>PAGE NOT FOUND</h1></Route>
        </Switch>
      )}
    </>
  );
}

export default App;
