class BaseRepository {
  constructor(model) {
    this.model = model
  }

  async getAll() {
    return await this.model.findMany()
  }

  async getById(id) {
    return await this.model.findUnique({ where: { id } })
  }

  async create(data) {
    return await this.model.create({ data })
  }

  async update(id, data) {
    return await this.model.update({ where: { id }, data })
  }

  async delete(id) {
    return await this.model.delete({ where: { id } })
  }
}

module.exports = BaseRepository
