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
          <Route exact path="/"/>
          <Route path="/stream">
            <Songs />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route path="/login">
            <LoginFormModal />
          </Route>
          <Route path="/signup">
            <SignUpFormModal />
          </Route>
          <Route path="/songs/:id/edit">
            <EditSongForm />
          </Route>
          <Route path="/songs/:id">
            <SongDetails />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
