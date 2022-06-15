module.exports = {
  async redirects() {
    return [
      {
        source: '/cv.php',
        destination: 'https://alexander.molodykh.online/phone/',
        permanent: false,
      },
    ]
  },
}