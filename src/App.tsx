import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppHeader, Home } from "master/components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ResumeBuilder } from "resume-builder/page";

export const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route exact={true} path={"/"}>
          <Home />
        </Route>
        <Route path={"/resume-builder/:resumeId(\\d+)?"}>
          <ResumeBuilder />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
