
const fastify = require('fastify')({
    logger: true
})

fastify.register(require('./routes/v1/routes'), { prefix: 'api' })

fastify.listen(3000)