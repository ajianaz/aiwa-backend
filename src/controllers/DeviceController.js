const DeviceService = require('../services/DeviceService')
const ResponseHelper = require('../helpers/ResponseHelper')

class DeviceController {
  async getAllDevices(req, reply) {
    try {
      const devices = await DeviceService.getAll()
      return ResponseHelper.success(
        reply,
        200,
        'Devices retrieved successfully',
        devices
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async getDeviceById(req, reply) {
    try {
      const { deviceId } = req.params
      const device = await DeviceService.getById(deviceId)
      if (!device) {
        return ResponseHelper.failure(reply, 404, 'Device not found')
      }
      return ResponseHelper.success(
        reply,
        200,
        'Device retrieved successfully',
        device
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async createDevice(req, reply) {
    try {
      const newDevice = await DeviceService.create(req.body)
      return ResponseHelper.success(
        reply,
        201,
        'Device created successfully',
        newDevice
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async updateDevice(req, reply) {
    try {
      const { deviceId } = req.params
      const updatedDevice = await DeviceService.update(
        deviceId,
        req.body
      )
      return ResponseHelper.success(
        reply,
        200,
        'Device updated successfully',
        updatedDevice
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async deleteDevice(req, reply) {
    try {
      const { deviceId } = req.params
      await DeviceService.delete(deviceId)
      return ResponseHelper.success(
        reply,
        200,
        'Device deleted successfully'
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }
  async findByOrganizationId(req, reply) {
    try {
      const { organizationId } = req.params
      const device = await DeviceService.findByOrganizationId(organizationId)
      return ResponseHelper.success(
        reply,
        200,
        'Devices retrieved successfully',
        device
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }
}

module.exports = new DeviceController()
