import React, { useState } from "react";
import Login from "./Login";
import RegisterForm from "./RegisterForm";
import { GoogleLogin } from "react-google-login";
import {
  ModalImg,
  ModalContent,
  ImgCol,
} from "../../../../styles/pages/authentication";
import { AiFillCloseSquare } from "react-icons/ai";
import crystal from "../../../../assets/images/AuthDesign.jpg";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { ApiPostService } from "../../../../services/api/api-services";

export default function Modals({ showModal, setShowModal }) {
  const handleClose = () => setShowModal(false);

  const responseGoogle = (response) => {
    let res = response.profileObj;
    // refreshTokenSetup(response);
    const payload = {
      id: res.googleId,
      photo: res.imageUrl,
      email: res.email,
      name: res.name,
    };
    console.log(ApiPostService(process.env.REACT_APP_GOOGLE_LOGIN, payload));
    if (ApiPostService(process.env.REACT_APP_GOOGLE_LOGIN, payload)) {
      setShowModal(false);
      alert(`Logged in successfully welcome ${res.name} 😍. `);
    }
  };

  const [loginForm, setLoginForm] = useState(true);

  return (
    <>
      <Modal
        size="lg"
        show={showModal}
        onHide={handleClose}
        centered={true}
        animation={true}
      >
        <Modal.Header>
          <Modal.Title>Purple Marts Welcomes you !</Modal.Title>

          <AiFillCloseSquare
            size="35"
            onClick={handleClose}
            style={{ color: "ff5a57" }}
          />
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <ImgCol>
                <ModalImg src={crystal} alt="Design" />
              </ImgCol>
              <Col>
                <ModalContent>
                  <Modal.Title className="mb-3">
                    Ready for shopping?
                  </Modal.Title>
                  {loginForm ? (
                    <div style={{ width: "100%" }}>
                      <Login
                        setShowModal={setShowModal}
                        setLoginForm={setLoginForm}
                      />
                    </div>
                  ) : (
                    <RegisterForm
                      setLoginForm={setLoginForm}
                      setShowModal={setShowModal}
                    />
                  )}

                  <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    isSignedIn={true}
                    buttonText={
                      loginForm ? "Sign in Google" : "Sign up with Google"
                    }
                    cookiePolicy={"single_host_origin"}
                    className="mt-2"
                  />
                </ModalContent>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      
      </Modal>
    </>
  );
}
