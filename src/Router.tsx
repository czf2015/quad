// 参考：https://segmentfault.com/a/1190000020812860
// @ts-nocheck
import React from "react";
import {
  BrowserRouter /* , HashRouter */ as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "@/config/routes";

const handleRoutes = (routes) => {
  return (
    <Switch>
      {routes.map(
        ({
          component = ({ children }) => children,
          redirect,
          path,
          key = path,
          childRoutes,
        }) => {
          if (childRoutes) {
            const Layout = component;
            return (
              <Route path={path} key={key}>
                <Layout>{handleRoutes(childRoutes)}</Layout>
              </Route>
            );
          }
          return redirect ? (
            <Route exact path={path} key={key}>
              <Redirect to={redirect} />
            </Route>
          ) : (
            <Route exact path={path} component={component} key={key} />
          );
        }
      )}
    </Switch>
  );
};

export default () => {
  return (
    <Router>
      {handleRoutes(routes)}
    </Router>
  );
};
