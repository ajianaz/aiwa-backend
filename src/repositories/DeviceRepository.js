const { PrismaClient } = require('@prisma/client')
const BaseRepository = require('./BaseRepository')

const prisma = new PrismaClient()

class DeviceRepository extends BaseRepository {
  constructor() {
    super(prisma.device) // Pastikan model yang benar dipakai
  }

  // Method tambahan untuk mencari device berdasarkan Organization ID
  async findByOrganizationId(organizationId) {
    return await this.model.findMany({
      where: { organization_id: organizationId }
    })
  }
}

module.exports = new DeviceRepository()
