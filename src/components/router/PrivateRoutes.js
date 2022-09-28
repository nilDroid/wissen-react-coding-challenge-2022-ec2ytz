import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.authToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    authToken: state.authReducer.authToken
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
