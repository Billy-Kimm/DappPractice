pragma solidity ^0.4.25;

contract Note {
    
    string public note; // var & getter()
    
    constructor(string _input) public {
        note = _input;
    }
    
    function setMessage(string _input) public {
        note = _input;
    }
    
}

