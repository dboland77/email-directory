import React from 'react'
import styles from './EmailAddress.module.css';

const EmailAddress = (email) => {

  const handleClick = () => {
      email = ""
  }

  return (
    <div className = {styles.address} onClick={handleClick}>
      {email} x
    </div>
  )
}

export default EmailAddress;
