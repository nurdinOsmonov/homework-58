import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          setShowAlert(true);
        }}
      >
        Open Alert
      </button>

      <Modal
        show={showModal}
        title="Some modal title"
        onClose={() => setShowModal(false)}
      >
        <p>This is modal content</p>
      </Modal>

      <Alert
        type="warning"
        show={showAlert}
        close={showWarningAlert}
        onDismiss={() => {
          setShowWarningAlert(true);
        }}
      >
        This is a warning type alert
      </Alert>

      <Alert
        type="success"
        show={showAlert}
      >
        This is a success type alert
      </Alert>

      <Alert
        type="primary"
        show={showAlert}
        onDismiss={() => setShowAlert(false)}
      >
        This is a primary type alert
      </Alert>

      <Alert
        type="danger"
        show={showAlert}
      >
        This is a primary type alert
      </Alert>
    </>
  );
}

export default App;
