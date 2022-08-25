module.exports = {
  env: {
    MONGO_URI: `mongodb+srv://${process.env.M_UN}:${process.env.M_PW}@cluster0.l79jczi.mongodb.net/?retryWrites=true&w=majority`
  },
  reactStrictMode: true,
  swcMinify: true,
}