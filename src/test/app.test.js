'use strict'

const build = require('../app')

const delay = ms => setTimeout(() => Promise.resolve(), ms);

const test = async () => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  console.log('status code: ', response.statusCode)
  console.log('body: ', response.body)
}
test()