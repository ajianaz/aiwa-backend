const fastify = require('fastify')({ logger: true })
const jwt = require('@fastify/jwt')
const cors = require('@fastify/cors')
const helmet = require('@fastify/helmet')
const routes = require('./routes')

// Register plugins
fastify.register(jwt, { secret: process.env.JWT_SECRET })
fastify.register(cors, { origin: '*' })
fastify.register(helmet)

// Register all routes
fastify.register(routes)

module.exports = fastify
