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
    const existing = await this.getById(id)
    if (!existing) throw new Error(`Record with ID ${id} not found`)

    return await this.model.update({
      where: { id },
      data
    })
  }

  async delete(id) {
    const existing = await this.getById(id)
    if (!existing) throw new Error(`Record with ID ${id} not found`)

    return await this.model.delete({ where: { id } })
  }
}

module.exports = BaseRepository
