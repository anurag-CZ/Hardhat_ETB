const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deployer contract address", deployer.address);
    console.log("Account balance",( await deployer.getBalance()).toString())

    const Token = await ethers.getContractFactory("Token")
    const token = await Token.deploy()

    console.log("Token Address: ",token.address)
}

main().then(() => process.exit(0)).catch((err) => {
    console.log(err);
    process.exit(1);
})