const BaseService = require('./BaseService')
const OrganizationRepository = require('../repositories/OrganizationRepository')

class OrganizationService extends BaseService {
  constructor() {
    super(OrganizationRepository)
  }

  async getAllDevices() {
    return await DeviceRepository.getAll()
  }

  async findByOwnerId(ownerId) {
    return await this.repository.findByOwnerId(ownerId)
  }
}

module.exports = new OrganizationService()
