const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllOrganizations = async () => {
  return await prisma.organization.findMany()
}

exports.createOrganization = async (data) => {
  return await prisma.organization.create({ data })
}
