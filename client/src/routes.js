import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./Pages/AuthPage";
import { CreatePage } from "./Pages/CreatePage";
import { DetailsPage } from "./Pages/DetailsPage";
import { LinksPage } from "./Pages/LinksPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={"/links"} exact>
          <LinksPage />
        </Route>

        <Route path={"/create"} exact>
          <CreatePage />
        </Route>

        <Route path={"/detail/:id"}>
          <DetailsPage />
        </Route>

        <Redirect to={"/create"} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={"/"} exact>
        <AuthPage />
      </Route>

      <Redirect to={"/"} />
    </Switch>
  );
};
