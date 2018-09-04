pragma solidity ^0.4.24;

contract Resolver {
  function supportsInterface(bytes4 interfaceID) constant returns (bool);
  function addr(bytes32 nodeID) constant returns (address);
}
