import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import config from '../config'
import api from './api'

const app = new express()

app.set(`port`, config.server.port)
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(api)

app.get(`*`, (request, response) => {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')

  response.send(html)
})

app.listen(app.get(`port`), () => console.log(`server running http://${config.server.domain}:${app.get('port')}`))
