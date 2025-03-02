const organizationRepository = require('../repositories/organizationRepository')

exports.getAllOrganizations = async () => {
  return await organizationRepository.getAllOrganizations()
}

exports.createOrganization = async (data) => {
  return await organizationRepository.createOrganization(data)
}
