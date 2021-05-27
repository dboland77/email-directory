import Container from "../Containers/Container";
import { useReducer, useState, Fragment } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Image from "../Image/Image";
import uc from "../../assets/uc.png";
import EmailContainer from "../Containers/EmailContainer";
import EmailList from "../../components/Email/EmailList";


const listReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    default:
      throw new Error();
  }
};

const initialList = [
  {
    id: 1,
    email: "john@gmail.com",
  },
  {
    id: 2,
    email: "jim@gmail.com",
  },
  {
    id: 3,
    email: "alan@gmail.com",
  },
  {
    id: 4,
    email: "pat@gmail.com",
  },
  {
    id: 5,
    email: "joey@gmail.com",
  },
];

const App = () => {
  const [show, setShow] = useState(false);

  const [listData, dispatchListData] = useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });

  const handleRemove = (id) => {
    dispatchListData({ type: "REMOVE_ITEM", id });
  };

  if (!listData.isShowList) {
    return null;
  }

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Container>
        <Image file={uc} />
        <p>User email list</p>
        <Button caption="Add User" onClick={showModal} />
        <Modal
          show={show}
          handleClose={hideModal}
        />
      </Container>
      
      <EmailContainer>
        <EmailList list={listData.list} onRemove={handleRemove} />
      </EmailContainer>
    </Fragment>
  );
};

export default App;
