const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains,networkConfig } = require("../../helper-hardhat-config")


developmentChains.includes(network.name)
?describe.skip
:describe("FundMe", function () {
    let fundMe
    let mockV3Aggregator
    let deployer
    // const sendValue = ethers.parseEther("1");
    beforeEach(async () => {
        // const accounts = await ethers.getSigners()
        // deployer = accounts[0]
        deployer = (await getNamedAccounts()).deployer
        // await deployments.fixture(["all"])
        fundMe = await ethers.getContract("FundMe", deployer)
        // mockV3Aggregator = await ethers.getContract(
        //     "MockV3Aggregator",
        //     deployer
        // )
    })

    describe("constructor", function () {
        it("sets the aggregator addresses correctly", async () => {
            const response = await fundMe.priceFeed()
            assert.equal(response, networkConfig[network.config.chainId]["ethUsdPriceFeed"])
        })
    })

    describe("fund", function () {
        // https://ethereum-waffle.readthedocs.io/en/latest/matchers.html
        // could also do assert.fail
        it("Fails if you don't send enough ETH", async () => {
            await expect(fundMe.fund()).to.be.revertedWith(
                "You need to spend more ETH!"
            )
        })
    })
})