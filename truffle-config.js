module.exports = {
  networks: {
    development: {
      host: "10.20.200.206",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}