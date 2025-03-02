const DeviceController = require('../controllers/DeviceController')

async function deviceRoutes(fastify, options) {
  fastify.get('/devices', DeviceController.getAll)
  fastify.get(
    '/devices/organization/:organizationId',
    DeviceController.findByOrganizationId
  )
}

module.exports = deviceRoutes
