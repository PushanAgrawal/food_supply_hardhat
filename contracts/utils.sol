// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract utils {

    enum status {Accepted, Rejected, Pending, Arrived, Received, Updated}

    struct tranc {
        string ipfs;
        address sender;
        address reciver;
        string shipStatus;
        string payHash;
    }
    mapping(string=>tranc) transactions;

    function getTrancHash(string memory id) public view returns(string memory){
        return transactions[id].ipfs;

    }
}