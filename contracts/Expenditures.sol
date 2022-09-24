pragma solidity >=0.5.0;

contract Expenditures{

uint public totalitems;

  struct expenditures{
        uint amt;
        string month;
        string donation_id;
        bool spent;
    }

    mapping(uint=>Expenditures) public donations;


}
