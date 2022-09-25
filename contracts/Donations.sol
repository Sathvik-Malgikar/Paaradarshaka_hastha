// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract Donations{
    uint public donationCount=0;

    
    struct Donation{
        uint id;
        uint amt;
        string comment;
        bool completed;
        bool spent;
    }

    mapping(uint=>Donation) public donations;

event donationSpent(uint, bool);
function spendDonation(uint id) public {
    Donation memory _donation  = donations[id];

_donation.spent=true;
emit donationSpent (id,_donation.spent );
}
// function getDonationObject  (uint i) public {
//     return i*i;
// }



event DonationMade(
    uint id,
    uint amt,
    string comment,
    bool completed,
    bool spent
);
    event DonationCompleted(uint id,
    bool completed);

    constructor() public {
        makeDonation(0,"");
    }
    function makeDonation(uint t_amt,string memory _content) public {
        donationCount ++;
        donations[donationCount]=Donation(donationCount,t_amt,_content,false,false);
        emit DonationMade(donationCount,t_amt,_content,false,false);
    }
    function toggleCompleted(uint _id) public {
        Donation memory _donation=donations[_id];
        _donation.completed=!_donation.completed;
        donations[_id]=_donation;
        emit DonationCompleted(_id,_donation.completed);
    }

}