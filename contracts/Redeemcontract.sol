// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract redeem{

struct Donation{
    uint id;
    uint amt;
    string comment;
    bool completed;
    bool spent;
}

mapping(uint=>Donation) public donations;


function spendDonation(id){
donations[id].spent=true

}

}
