const app = require('./src/app')

const start = async () => {
  try {
    await app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' })
    console.log(
      `🚀 Server running on port ${process.env.PORT || 3000} in ${process.env.NODE_ENV || 'development'
      } mode`
    )
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
