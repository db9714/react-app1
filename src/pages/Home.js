import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser } from "./../utils/actions";
import styles from "./css/Home.module.css";
import SimpleSlider from "./../components/Slider";

class Home extends React.Component {
  state = {};
  componentDidMount() {}

  toggleLoader = (showLoader) => this.setState({ showLoader });

  render() {
    const { showLoader, invitationLink, showLinkCopied } = this.state;

    return (
      <>
        <NavBar />
        <Container className={styles.container} fluid>
          <Row>
            <div style={{ width: window.innerWidth, height: 300 }}>
              <SimpleSlider />
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">Deepak Bhangale</div>
    <div className="navbar__item">Certifications</div>
    <div className="navbar__item">About Me</div>
    <div className="navbar__item">Contact</div>
  </header>
);

export default connect((state) => ({ user: state.user }), { setUser })(withRouter(Home));
