import { useState, useEffect } from "react";
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
    <div
      className="container-fluid"
      style={{ width: "50%", marginTop: "10%", marginBottom: "10%" }}
    >
      <Wrapper showModal={showModal} setShowModal={setShowModal} />
      <Text primary>Please login to view details</Text>
      <center>
        <img
          src="https://blogimage.vantagecircle.com/vcblogimages/2020/08/Disadvantages-of-working-from-home.png"
          alt="loh"
          height="200px"
          width="auto"
          style={{ border: "1px solid #dee2e6", padding: ".25rem" }}
        />

        <br />
        <br />
        <Button onClick={openModal} style={{ width: "70%" }}>
          Login
        </Button>
      </center>
    </div>
  );
};

export default Error;
