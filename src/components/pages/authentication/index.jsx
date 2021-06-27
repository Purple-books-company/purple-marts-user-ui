import Modal from "./components/Modal";

const Wrapper = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Wrapper;
