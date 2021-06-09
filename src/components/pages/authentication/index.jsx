import { GoogleLogin } from "react-google-login";
import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { ApiPostService } from "../../../services/ApiServices";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
} from "../../../styles/pages/authentication";
import { refreshTokenSetup } from "./components/RefreshTokenSetup";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { CLIENT_ID, GOOGLE_LOGIN } from "../../../config";
import { Links } from "../../../styles/widgets/widgets";

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
    alert(`Logged in successfully welcome ${res.name} 😍. `);
    refreshTokenSetup(response);
    const payload = {
      id: res.googleId,
      photo: res.imageUrl,
      email: res.email,
      name: res.name,
    };
    console.log(ApiPostService(GOOGLE_LOGIN, payload));
    if (ApiPostService(GOOGLE_LOGIN, payload)) setShowModal(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg
                src="https://i.pinimg.com/originals/7d/9f/74/7d9f74c23597c8aaae086f03aa702e07.jpg"
                alt="camera"
              />

              <ModalContent>
                <h2>Ready for Shopping?</h2>
                {loginForm ? (
                  <div style={{ width: "80%" }}>
                    <LoginForm setShowModal={setShowModal} />
                    <center>
                      <br />
                      <GoogleLogin
                        clientId={CLIENT_ID}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                      />
                      <Links onClick={() => setLoginForm(false)}>
                        No account? Create One
                      </Links>
                    </center>
                  </div>
                ) : (
                  <RegisterForm
                    setLoginForm={setLoginForm}
                    setShowModal={setShowModal}
                  />
                )}
              </ModalContent>

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Wrapper;