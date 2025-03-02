const DeviceService = require('../services/DeviceService')

class DeviceController {
  async getAll(req, reply) {
    try {
      const devices = await DeviceService.getAll()
      reply.send({ success: true, data: devices })
    } catch (error) {
      reply.status(500).send({ success: false, message: error.message })
    }
  }

  async findByOrganizationId(req, reply) {
    try {
      const { organizationId } = req.params
      const devices = await DeviceService.findByOrganizationId(organizationId)
      reply.send({ success: true, data: devices })
    } catch (error) {
      reply.status(500).send({ success: false, message: error.message })
    }
  }
}

module.exports = new DeviceController()
