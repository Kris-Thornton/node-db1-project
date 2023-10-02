exports.checkAccountPayload = (req, res, next) => {
  console.log('checkAccountPayload middleware')
  next()
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log('checkAccountNameUnique middleware')
  next()
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  console.log('checkAccountID middleware')
  next()
  // DO YOUR MAGIC
}
