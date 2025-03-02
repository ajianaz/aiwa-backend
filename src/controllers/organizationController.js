const OrganizationService = require('../services/OrganizationService')
const ResponseHelper = require('../helpers/ResponseHelper')

class OrganizationController {
  async getAllOrganizations(req, reply) {
    try {
      const organizations = await OrganizationService.getAll()
      return ResponseHelper.success(
        reply,
        200,
        'Organizations retrieved successfully',
        organizations
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async getOrganizationById(req, reply) {
    try {
      const { organizationId } = req.params
      const organization = await OrganizationService.getById(organizationId)
      if (!organization) {
        return ResponseHelper.failure(reply, 404, 'Organization not found')
      }
      return ResponseHelper.success(
        reply,
        200,
        'Organization retrieved successfully',
        organization
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async createOrganization(req, reply) {
    try {
      const newOrganization = await OrganizationService.create(req.body)
      return ResponseHelper.success(
        reply,
        201,
        'Organization created successfully',
        newOrganization
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async updateOrganization(req, reply) {
    try {
      const { organizationId } = req.params
      const updatedOrganization = await OrganizationService.update(
        organizationId,
        req.body
      )
      return ResponseHelper.success(
        reply,
        200,
        'Organization updated successfully',
        updatedOrganization
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }

  async deleteOrganization(req, reply) {
    try {
      const { organizationId } = req.params
      await OrganizationService.delete(organizationId)
      return ResponseHelper.success(
        reply,
        200,
        'Organization deleted successfully'
      )
    } catch (error) {
      return ResponseHelper.error(reply, 500, error.message)
    }
  }
}

module.exports = new OrganizationController()
