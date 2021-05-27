const isValidEmail = email => {
  const myHeaders = new Headers();

  const myRequest = new Request('flowers.jpg', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    uri: 'https://trumail.io/json/' + email,
      json: true
  });

  fetch(myRequest)
  .then(response => response.json())
  .catch(error => {
    console.error('Problem fetching from trumail', error);
  })
  
 

};


export {isValidEmail}


// function getEmailInfo(email) {

// 	let options = {
// 		method: 'GET',
// 		uri: 'https://trumail.io/json/' + email,
// 		json: true
// 	};

// 	return request(options)
// 		.then(res => {
// 			return res;
// 		})
// 		.catch(err => {
// 			return err;
// 		});
// };

// module.exports.getEmailInfo = getEmailInfo;