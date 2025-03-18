const BaseService = require('./BaseService')
const DeviceRepository = require('../repositories/DeviceRepository')

class DeviceService extends BaseService {
  constructor() {
    super(DeviceRepository)
    this.deviceRepository = DeviceRepository
  }

  async findByOrganizationId(organizationId) {
    return await this.deviceRepository.findByOrganizationId(organizationId)
  }
}
module.exports = new DeviceService()
