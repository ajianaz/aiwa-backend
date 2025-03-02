const OrganizationController = require('../controllers/OrganizationController')

async function organizationRoutes(fastify, options) {
  fastify.get('/', OrganizationController.getAllOrganizations)
  fastify.get('/:organizationId', OrganizationController.getOrganizationById)
  fastify.post('/', OrganizationController.createOrganization)
  fastify.put('/:organizationId', OrganizationController.updateOrganization)
  fastify.delete('/:organizationId', OrganizationController.deleteOrganization)
}

module.exports = organizationRoutes
