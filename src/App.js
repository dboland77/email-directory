import "./App.css";
//import EmailAddress from "./components/EmailAddress";
//import Container from "./components/Container";
import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="App">
      {/* <Container /> */}
      <Button caption="Show Modal" onClick={showModal} />

      <Modal show={show} handleClose={hideModal}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
      {/* <EmailAddress /> */}
    </div>
  );
}

export default App;
