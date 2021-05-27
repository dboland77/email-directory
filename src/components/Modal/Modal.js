import "./Modal.css";
import React, { useState } from 'react';
import { fetchEmailData } from '../../utilities'
import Button from "../Button/Button"
 
 const Modal = ({ handleClose, show , emaildata=[]}) => {
   const showHideClassName = show ? "modal displayBlock" : "modal displayNone";
    const [emailError, setemailError] = useState('');
    const [email, setEmail] = useState('');
    const [display, setDisplay] = useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (email === '') {
      setemailError('')
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(email)) {
      setemailError('error');
    }
    else {
      setemailError('nice');
      handleFormSubmit();
    }
  }

  const handleFormSubmit = () => {
    console.log("hello from form submit")
    fetchEmailData(email);
    setEmail('');
  }

  const validateEmailFormat = () => {
    if (email === '') {
      setemailError('')
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(email)) {
      setemailError('error')
    }
    else {
      setemailError('nice')
    }
  }

  const renderErrorMessage = () => {
    if (emailError === 'error') {
      return (
        <p>Please enter a valid email format.</p>
      )
    }
  }

  const renderEmailStatus = () => {
    console.log("hello from renderEmailStatus")
    const emailData = emaildata[0];

    if (emailData !== undefined) {
      if (emailData.deliverable === true) {
        return(
          <div className={display}>
            <p>yEmail check complete</p>
            <button onClick={() => {setDisplay('hidden')}}>Continue</button>
          </div>
        )
      }
      else if (emailData.deliverable === false)  {
        return(
          <div>
            <p>Cannot deliver to this email address!</p>
          </div>
        )
      }
    }
  }

    return (
      <div className={showHideClassName}>
             <section className="modalMain">
              <button className = "close" onClick={handleClose}>x</button>
              <form onSubmit={handleSubmit}>
               <div className={emailError}>
                 <input type ='text' name='email'
                   value={email}
                   placeholder="example@email.com"
                   onBlur={validateEmailFormat}
                   onChange={handleChange}/>
                 {renderErrorMessage()}
               </div>
               <Button onClick={handleSubmit}/>
             </form>
             {/* {renderEmailStatus()} */}
              </section>
             
      </div>
    );
  }

export default Modal;