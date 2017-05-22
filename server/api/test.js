import express from 'express'
import UserEntity from '../entity/test'

const router = express.Router()

router.get('/api/login', (request, response) => {
  console.log(request.query)
  UserEntity.findById(request.query.id)
    .then(doc => response.status(200).send(doc))
    .catch(err => response.status(500).send(err))
})

router.post('/api/login', (request, response) => {
  const {
    account,
    password
  } = request.body

  UserEntity.save({ account, password })
    .then(doc => {
      console.log(doc)

      response.status(200).send(JSON.stringify(doc))
    })
    .catch(err => response.status(500).send(err))
})

export default router
