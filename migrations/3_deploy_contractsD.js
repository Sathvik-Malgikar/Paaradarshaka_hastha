var DonationList = artifacts.require("./Donations.sol");

module.exports = function(deployer) {
  deployer.deploy(DonationList);
};
