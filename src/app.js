const fastify = require('fastify')({ logger: true })
const jwt = require('@fastify/jwt')
const cors = require('@fastify/cors')
const helmet = require('@fastify/helmet')
const organizationRoutes = require('./routes/organizationRoutes')

// Register plugins
fastify.register(jwt, { secret: process.env.JWT_SECRET })
fastify.register(cors, { origin: '*' })
fastify.register(helmet)

// Register routes
fastify.register(organizationRoutes, { prefix: '/organizations' })

module.exports = fastify
