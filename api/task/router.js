// build your `/api/tasks` router here
const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('get tasks')
})

router.post('/', (req, res, next) => {
  res.json('post task')
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: 'something went wrong in the tasks router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router