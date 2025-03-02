class ResponseHelper {
  static success(reply, code, message, data = null) {
    return reply.code(code).send({
      success: true,
      message,
      data
    })
  }

  static error(reply, code, message) {
    return reply.code(code).send({
      success: false,
      message,
      data: null
    })
  }

  static failure(reply, code, message = 'Operation failed.', data = null) {
    return reply.code(code).send({
      success: false,
      message,
      data
    })
  }
}

module.exports = ResponseHelper
