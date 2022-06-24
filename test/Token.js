const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", async () => {
    let Token, token, owner, addr1, addr2;

    beforeEach(async () => {
        Token = await ethers.getContractFactory('Token');
        token = await Token.deploy();
        [owner, addr1, addr2, _] = await ethers.getSigners();
    })

    describe("Deployment", async () => {
        it("Should set right owner", async () => {
            expect(await token.owner()).to.equal(owner.address);
        })
        it("total supply", async () => {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);
        })
    });

    // describe("Transaction", () => {
    //     it("should transfer token", async () => {
    //         await token.transfer(addr1.address, 50);
    //         const addr1Balance = await token.balanceOf(addr1.address);
    //         expect(addr1Balance).to.equal(50);

    //         await token.connect(addr1).transfer(addr2.address, 50);
    //         const addr2Balance = await token.balanceOf(addr2.address);
    //         expect(addr2Balance).to.equal(50);
    //     });

   
    // })
})