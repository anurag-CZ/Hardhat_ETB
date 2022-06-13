//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Token {
    string public name = "Token";
    string public symbol = "TKN";
    uint public totalSupply = 1000;
    address public owner;
    mapping(address => uint) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function balanceOf(address _addr) external view returns(uint) {
        return balances[_addr];
    }

    function transfer(uint amount) public {
        require(balances[owner] >= amount, "Not enough Token available");
        balances[owner] -= amount;
        balances[msg.sender] += amount;

    }
}