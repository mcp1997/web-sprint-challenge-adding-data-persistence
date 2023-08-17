// build your `/api/resources` router here
const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('get resources')
})

router.post('/', (req, res, next) => {
  res.json('post resource')
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: 'something went wrong in the resources router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router