import React, { Suspense } from "react";
import { Route, Router, Redirect } from "react-router-dom";
import Routers from "./routes";
import * as Layout from "../layout";
import { history } from "../helpers";
import CodeSplitter from "helpers/CodeSplitter";
import Modal from "component/Common/LoaderModal";
import { NotificationContainer } from "react-notifications";

function Routes() {
  return (
    <div>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          {Routers.map(
            ({
              component,
              name,
              componentPath = "",
              redirect,
              path,
              exact = false,
              auth = true,
              childrens = [],
            }) => {
              if (childrens.length > 0) {
                return (
                  <Route
                    path={path}
                    exact={exact}
                    key={path}
                    render={(props) => {
                      if (redirect) {
                        if (props.location.pathname === path) {
                          props.history.push(redirect);
                        }
                      }

                      const LayoutComponent = Layout[component];

                      return (
                        <LayoutComponent {...props}>
                          {childrens.map(
                            ({
                              component: ChildrenComponent,
                              componentPath: childComponentPath,
                              name = "",
                              path: childrenPath,
                              exact = false,
                              auth = true,
                            }) => {
                              CodeSplitter.addComponent(
                                childComponentPath,
                                name
                              );

                              return (
                                <Route
                                  path={path + childrenPath}
                                  exact={exact}
                                  key={path + childrenPath}
                                  render={(props) => {
                                    let PageComponent =
                                      CodeSplitter.getComponent(name);

                                    return (
                                      <div>
                                        <PageComponent {...props} />
                                        <Modal />
                                      </div>
                                    );
                                  }}
                                />
                              );
                            }
                          )}
                        </LayoutComponent>
                      );
                    }}
                  />
                );
              }

              CodeSplitter.addComponent(componentPath, name);

              return (
                <Route
                  path={path}
                  exact={exact}
                  key={component || 2322}
                  render={(props) => {
                    if (component) {
                      let PageComponent = CodeSplitter.getComponent(name);
                      return (
                        <div>
                          <PageComponent />
                          <Modal />
                        </div>
                      );
                    }

                    if (redirect) {
                      if (props.location.pathname === path) {
                        return <Redirect to={redirect} />;
                      }
                    }
                    return <div></div>;
                  }}
                />
              );
            }
          )}
        </Suspense>
        <NotificationContainer />
      </Router>
    </div>
  );
}

export default Routes;
