// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract items {


    mapping(string=>string) item;
    
    event newItem (string indexed code , address indexed a , string indexed itemType, string ipfs);
    event updateitemDetails (string indexed code , address a, string itemType, string indexed ipfs);
    
    function addItem(string memory ipfs,string memory  code,  string memory itemType) public {
        item[code]=ipfs;    
        emit newItem(code, msg.sender, itemType, ipfs);    
    }
    function updateItem(string memory ipfs, string memory code,string memory itemType) internal  {
        item[code]=ipfs; 
        emit updateitemDetails(code, msg.sender, itemType, ipfs);    


                   
    }
    // function getItem()
}