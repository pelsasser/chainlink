pragma solidity ^0.4.24;

import "./Ownable.sol";
import "./Resolver.sol";

contract ENSResolver is Ownable, Resolver {

  event AddrChanged(bytes32 indexed node, address a);

  mapping(bytes32=>address) addresses;

  constructor() Ownable() public {}

  function addr(bytes32 _node)
    public constant returns(address)
  {
    return addresses[_node];
  }

  function setAddr(bytes32 _node, address _addr)
    public onlyOwner
  {
    addresses[_node] = _addr;
    emit AddrChanged(_node, _addr);
  }

  function supportsInterface(bytes4 _interfaceID)
    public constant returns (bool)
  {
    return _interfaceID == 0x3b3b57de || _interfaceID == 0x01ffc9a7;
  }

  function() public { // necessary?
    revert();
  }

}
