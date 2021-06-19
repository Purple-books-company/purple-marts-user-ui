import { useState } from "react";
import { Center } from "../../../styles/widgets/positioning";
import { Button, Text } from "../../../styles/widgets/widgets";
import Wrapper from "../../pages/authentication";

const Error = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Center>
      <Wrapper showModal={showModal} setShowModal={setShowModal} />
      <Text primary>Please login to view details</Text>

      <img
        src="https://blogimage.vantagecircle.com/vcblogimages/2020/08/Disadvantages-of-working-from-home.png"
        alt="loh"
        height="200px"
        width="auto"
        style={{ border: "1px solid #dee2e6", padding: ".25rem" }}
      />
      <br />
      <br />
      <Button onClick={openModal} style={{ width: "100%" }}>
        Login
      </Button>
    </Center>
  );
};

export default Error;
