let validate = (email) => {
  let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (pattern.test(email)) {
    return console.log('valid');
  } else {
    return console.log('invalid');
  }
}

validate('tes.mail.com');
validate('tes@mail.com');
validate('tes@mailcom');