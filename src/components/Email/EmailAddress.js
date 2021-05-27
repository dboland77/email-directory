import React from 'react'
import styles from './EmailAddress.module.css';

const EmailAddress = (props) => {
  return (
    <div class = {styles.address}>
      {props.value} x
    </div>
  )
}

export default EmailAddress;
