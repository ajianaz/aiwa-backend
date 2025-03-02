const { PrismaClient } = require('@prisma/client')
const BaseRepository = require('./BaseRepository')

const prisma = new PrismaClient()

class DeviceAgentAssignmentsRepository extends BaseRepository {
  constructor() {
    super(prisma.deviceAgentAssignments)
  }

  // Contoh method tambahan spesifik untuk Assignment
  async findByAgentId(agentId) {
    return await this.model.findMany({
      where: { agent_id: agentId }
    })
  }
}

module.exports = new DeviceAgentAssignmentsRepository()
