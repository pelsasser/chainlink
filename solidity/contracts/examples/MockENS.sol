pragma solidity ^0.4.24;

import "../lib/ENS.sol";

contract MockENS is ENS {
  function setSubnodeOwner(bytes32 node, bytes32 label, address owner) public {}

  function setResolver(bytes32 node, address resolver) public {}

  function setOwner(bytes32 node, address owner) public {}

  function setTTL(bytes32 node, uint64 ttl) public {}

  function owner(bytes32 node) public view returns (address) {
    return address(0);
  }

  function resolver(bytes32 node) public view returns (address) {
    return address(0);
  }

  function ttl(bytes32 node) public view returns (uint64) {
    return 0;
  }
}
