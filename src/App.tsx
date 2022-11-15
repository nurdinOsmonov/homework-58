import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const close = () => setShowModal(false);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal
        show={showModal}
        title="Some modal title"
        onClose={close}
      >
        <p>This is modal content</p>
      </Modal>
    </>
  );
}

export default App;
