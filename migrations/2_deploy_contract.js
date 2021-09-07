const RefinableToken = artifacts.require("RefinableToken");

module.exports = function(deployer,network,accounts){
	deployer.deploy(RefinableToken);
}
