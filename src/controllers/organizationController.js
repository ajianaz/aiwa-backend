const organizationService = require('../services/organizationService')

exports.getAllOrganizations = async (req, reply) => {
  try {
    const organizations = await organizationService.getAllOrganizations()
    reply.send({ success: true, data: organizations })
  } catch (error) {
    reply.status(500).send({ success: false, message: error.message })
  }
}

exports.createOrganization = async (req, reply) => {
  try {
    const newOrg = await organizationService.createOrganization(req.body)
    reply.status(201).send({ success: true, data: newOrg })
  } catch (error) {
    reply.status(500).send({ success: false, message: error.message })
  }
}
