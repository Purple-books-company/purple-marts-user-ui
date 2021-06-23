import { GoogleLogin } from "react-google-login";
import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { ApiPostService } from "../../../services/api/api-services";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  Text,
  CloseModalButton,
} from "../../../styles/pages/authentication";
import { refreshTokenSetup } from "./components/RefreshTokenSetup";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login";

const Wrapper = ({ showModal, setShowModal }) => {
  const [loginForm, setLoginForm] = useState(true);
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  const responseGoogle = (response) => {
    let res = response.profileObj;
    refreshTokenSetup(response);
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

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <Background onClick={closeModal} ref={modalRef} className="mx-2">
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg
                src="https://i.pinimg.com/originals/7d/9f/74/7d9f74c23597c8aaae086f03aa702e07.jpg"
                alt="camera"
              />

              <ModalContent>
                <Text className="mt-3">Ready for Shopping?</Text>

                {loginForm ? (
                  <div style={{ width: "80%" }}>
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

                <center>
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
                </center>
              </ModalContent>

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
};

export default Wrapper;
