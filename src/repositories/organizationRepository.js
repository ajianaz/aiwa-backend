const { PrismaClient } = require('@prisma/client')
const BaseRepository = require('./BaseRepository')

const prisma = new PrismaClient()

class OrganizationRepository extends BaseRepository {
  constructor() {
    super(prisma.organization)
  }

  // Tambahkan method spesifik untuk Organization jika diperlukan
}

module.exports = new OrganizationRepository()
