const Account = require('./accounts-model')



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

exports.checkAccountId = async(req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    if(!account) {
      next({ status: 404, message: 'not found'})
    }else {
      req.account = account
      next()
    }
    
  } catch (err){
    next(err)
  }
 
}
