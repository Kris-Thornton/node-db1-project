const router = require('express').Router()
const md = require('./accounts-middleware')



router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json([{}, {}])
  }catch (err) {
    next({ status: 402, message: 'not working' })
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json('get accounts id')
  }catch (err) {
    next(err)
  }
})

router.post('/', md.checkAccountPayload, 
md.checkAccountNameUnique, 
(req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json('post accounts')
  }catch (err) {
    next(err)
  }
})

router.put('/:id', 
md.checkAccountId, 
md.checkAccountPayload,
md.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json('update accounts')
  }catch (err) {
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json('delete accounts')
  }catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
