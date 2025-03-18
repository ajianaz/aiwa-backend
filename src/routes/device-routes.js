const DeviceController = require('../controllers/DeviceController')

async function deviceRoutes(fastify, options) {
  fastify.get('/', DeviceController.getAllDevices)
  fastify.get('/:deviceId', DeviceController.getDeviceById)
  fastify.post('/', DeviceController.createDevice)
  fastify.put('/:deviceId', DeviceController.updateDevice)
  fastify.delete('/:deviceId', DeviceController.deleteDevice)


  fastify.get(
    '/organization/:organizationId',
    DeviceController.findByOrganizationId
  )
}

module.exports = deviceRoutes
