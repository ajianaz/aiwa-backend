const organizationRoutes = require('./organization-routes')
// const userRoutes = require('./user-routes')
const deviceRoutes = require('./device-routes')

module.exports = async function (fastify) {
  fastify.register(organizationRoutes, { prefix: '/organizations' })
  // fastify.register(userRoutes, { prefix: '/users' })
  fastify.register(deviceRoutes, { prefix: '/devices' })
}
