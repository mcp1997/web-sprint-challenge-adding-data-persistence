// build your `/api/projects` router here
const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('get projects')
})

router.post('/', (req, res, next) => {
  res.json('post project')
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: 'something went wrong in the projects router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router