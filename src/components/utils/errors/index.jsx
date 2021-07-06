import { useState, useEffect } from "react";
import logPic from "../../../assets/images/LoginError.png";
import { Button, Text } from "../../../styles/widgets/widgets";
import Wrapper from "../../pages/authentication";

const Error = ({ func }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (showModal === false && localStorage.getItem("isLogged")) func();
  });

  return (
    <>
      <Text primary align="center" style={{ marginTop: "5%" }}>
        Please login to view details
      </Text>
      <div
        className="container-fluid"
        style={{ width: "40%", marginBottom: "10%" }}
      >
        <Wrapper showModal={showModal} setShowModal={setShowModal} />

        <div style={{ width: "100%", height: "50%" }}>
          <img
            src={logPic}
            alt="login"
            style={{
              border: "1px solid #dee2e6",
              padding: ".25rem",
              height: "inherit",
              width: "inherit",
            }}
          />

          <br />
          <br />
          <Button
            onClick={openModal}
            style={{ width: "inherit", height: "inherit" }}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
