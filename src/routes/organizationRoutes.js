const organizationController = require('../controllers/organizationController')

async function organizationRoutes(fastify, options) {
  fastify.get('/', organizationController.getAllOrganizations)
  fastify.post('/', organizationController.createOrganization)
}

module.exports = organizationRoutes
