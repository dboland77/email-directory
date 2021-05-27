// import Container from "../Containers/Container";
import { useState } from "react";
// import Button from "../Button/Button";
// import Modal from "../Modal/Modal";
// import Image from "../Image/Image";
// import uc from "../../assets/uc.png";
import EmailContainer from "../Containers/EmailContainer";

function App() {
  // const [show, setShow] = useState(false);
  const [emailAddresses, setEmailAddresses] = useState([
    "john@gmail.com",
    "pat@pat.com",
    "jim@gem.ie",
    "john@gmail.com",
    "pat@pat.com",
    "jim@gem.ie",
  ]);

  // const showModal = () => {
  //   setShow(true);
  // };

  // const hideModal = () => {
  //   setShow(false);
  // };

  // const updateEmails = (emails) => {
  //   setEmailAddresses(emails);
  // };

  return (
    <div className="App">
      {/* <Container>
        <Image file={uc} />
        <p>User email list</p>
        <Button caption="Add User" onClick={showModal} />
        <Modal 
        show={show} 
        handleClose={hideModal}
        updateEmails = {updateEmails} />
      </Container> */}
      <EmailContainer addresses={emailAddresses} />
    </div>
  );
}

export default App;
