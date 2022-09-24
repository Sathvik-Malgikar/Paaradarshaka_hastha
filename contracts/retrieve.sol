// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract retrieve{

struct Donation{
    uint id;
    uint amt;
    string comment;
    bool completed;
    bool spent;
}

mapping(uint=>Donation) public donations;


function spendDonation(uint id) public {
donations[id].spent=true;

}

}
