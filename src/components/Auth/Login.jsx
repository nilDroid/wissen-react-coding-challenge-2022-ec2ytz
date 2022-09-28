import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { authActions } from "../../store/actions";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { inputEmail, inputPassword } = this.state;
    this.props.logIn({ email: inputEmail, password: inputPassword });
  };

  render() {
    const { authToken, authError } = this.props;
    if (authToken) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <div className="login-form">
          <div className="imageAndLabelContainer">
            <img
              src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
              height="68"
              width="170"
              alt="logo"
            />
            <label className="labelStyle">
              {" "}
              Hello there,Sign in to continue
            </label>
          </div>

          <form className="form-signin" onSubmit={this.handleSubmit}>
            <label className="inputLabel"> Email </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              required="true"
              autoFocus=""
              onChange={this.handleChange}
            />
            <label className="inputLabel"> Password </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              required="true"
              onChange={this.handleChange}
            />

            <div className="termsAndConditionsContainer">
              <input
                type="checkbox"
                required="true"
                className="termsAndConditionsCheckBox"
                name="termsAndCondition"
              />
              <p className="termsAndConditionsLabel">
                {" "}
                By creating or logging into an account ,you are agreeing with
                our Terms and conditions and Privacy Policys
              </p>
            </div>

            <button className="button-style" type="submit">
              <span className="nextBtnStyle"> Next </span>
            </button>
            <p className="signInWithSSOLabelStyle">Signin with company SSO</p>
          </form>
          {authError ? (
            <div class="p-3 mb-2 bg-danger text-white">
              <span>{authError}</span>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.authReducer.authError,
    authToken: state.authReducer.authToken
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(authActions.logIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
