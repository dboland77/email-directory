import Container from "../Containers/Container";
import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Image from "../Image/Image";
import pc from "../../assets/pc.png";
import EmailContainer from "../Containers/EmailContainer";
import EnterEmail from '../Email/EnterEmail';

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
       <Image file={pc}/>
       <p>User email list</p>
      <Button caption="Add User" onClick={showModal} />
      <Modal show={show} handleClose={hideModal}>
        <p>Email entry</p>
        <EnterEmail/>
        <Button/>
      </Modal>
    </Container>
    <EmailContainer/>
  
    </div>
  );
}

export default App;
