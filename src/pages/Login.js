import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import AsyncSelect from "react-select/async";
import { PlainButton as LoginButton } from "./../components/Buttons";
import { TextInput } from "./../components/TextInput";

import SimpleSlider from "./../components/Slider";

// import ActivityLoader from "./../components/ActivityLoader";
import apiServices from "./../utils/api.service";
import { setUser, resetUser } from "./../utils/actions";
import styles from "./css/Login.module.css";

class Login extends React.Component {
  state = {
    txtUsername: "",
    txtPassword: "",
    txtError: "",
    chkRememberMe: false,
    showLoader: false,
    showSchool: false,
    // lstUniversities: [],
    selectedSchool: null,
  };

  componentDidMount() {
    this.props.resetUser();
  }

  toggleLoader = (showLoader) => this.setState({ showLoader });

  didForgotPassword = () => {};

  didSchoolSelect = (selectedSchool) => {};

  isValid = () => {
    const { txtPassword, txtUsername } = this.state;
    let result = null;
    if (txtUsername.length === 0) result = "Username cannot be empty";
    else if (txtPassword.length === 0) result = "Password cannot be empty.";

    return result;
  };

  didLogin = () => {};

  render() {
    const { txtUsername, txtPassword, txtError, chkRememberMe, showLoader, showSchool } = this.state;
    return (
      <>
        {/* {showLoader && <ActivityLoader show={showLoader} />} */}
        <Container className={styles.container} fluid>
          <Row>
            <Col className={styles.logoDiv}></Col>
          </Row>
          <Row>
            <Col className={styles.cardDiv}>
              <div className={styles.card}>
                <div style={{ width: 600 }}>
                  <SimpleSlider />
                </div>
                <span className={styles.cardTitle}>Sign In</span>
                <TextInput
                  value={txtUsername}
                  placeholder="Username"
                  onKeyPress={(e) => e.key === "Enter" && this.didLogin()}
                  onChange={(e) => this.setState({ txtUsername: e.target.value, txtError: "" })}
                />

                <TextInput
                  value={txtPassword}
                  placeholder="Password"
                  type="password"
                  onChange={(e) => this.setState({ txtPassword: e.target.value, txtError: "" })}
                  onKeyPress={(e) => e.key === "Enter" && this.didLogin()}
                />

                <LoginButton
                  className={styles.btnCss}
                  title="Login"
                  onKeyPress={(e) => e.key === "Enter" && this.didLogin()}
                  onClick={this.didLogin}
                />

                <div className={styles.forgotDiv}>
                  <Form.Check
                    id="rememberme"
                    className={styles.txtRememberMe}
                    checked={chkRememberMe}
                    type="checkbox"
                    label="Remember Me"
                    onChange={(e) => this.setState({ chkRememberMe: e.target.checked })}
                  />
                  <span className={styles.txtForgot} onClick={this.didForgotPassword}>
                    Forgot Password?
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect((state) => ({ user: state.user }), { setUser, resetUser })(withRouter(Login));
