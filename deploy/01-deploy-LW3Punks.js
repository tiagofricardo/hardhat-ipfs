const { network } = require("hardhat")
const { developmentChains, metadataURL } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    let args = [metadataURL]

    const verifyContracti = await deploy("LW3Punks", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    log("------------------------------------------------")
    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY &&
        process.env.POLYSCAN_API_KEY
    ) {
        log("Verifying...")
        await verify(verifyContracti.address, args)
    }
}

module.exports.tags = ["all", "vetification"]
