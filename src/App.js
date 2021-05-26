import EmailAddress from "./components/EmailAddress";
import Container from "./components/Container";
import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Image from "./components/Image";
import logo from "./assets/logo.png";
import name from "./assets/kortical.png";

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
       <Container> 
       <Image file={logo}/>
       <Image file={name}/>
       <p>User email list</p>
      <Button caption="Add User" onClick={showModal} />
      <Modal show={show} handleClose={hideModal}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
      <EmailAddress /> 
    </Container>
    </div>
  );
}

export default App;
