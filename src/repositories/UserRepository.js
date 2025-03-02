const { PrismaClient } = require('@prisma/client')
const BaseRepository = require('./BaseRepository')

const prisma = new PrismaClient()

class UserRepository extends BaseRepository {
  constructor() {
    super(prisma.user)
  }

  // Contoh method tambahan spesifik untuk User
  async findByEmail(email) {
    return await this.model.findUnique({
      where: { email }
    })
  }
}

module.exports = new UserRepository()
