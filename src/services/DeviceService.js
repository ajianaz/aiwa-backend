const BaseService = require('./BaseService')
const DeviceRepository = require('../repositories/DeviceRepository')

class DeviceService extends BaseService {
  constructor() {
    super(DeviceRepository)
  }

  async getAllDevices() {
    return await DeviceRepository.getAll()
  }

  async findByOrganizationId(organizationId) {
    return await this.repository.findByOrganizationId(organizationId)
  }
}

module.exports = new DeviceService()
