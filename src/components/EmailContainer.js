import React from 'react'
import EmailAddress from './EmailAddress'

const EmailContainer = () => {

  const addresses = ["john@gmail.com", "pat@pat.com", "jim@gem.ie"]
  
  const listItems = addresses.map((address,index) =>
    
    <EmailAddress key={index} value={address} />
  );

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default EmailContainer

