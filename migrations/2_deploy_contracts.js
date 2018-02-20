var HelloERC20 = artifacts.require("./HelloERC20.sol");

module.exports = function(deployer) {
    deployer.deploy(HelloERC20);
};
