pragma solidity ^0.4.24;

import "./Consumer.sol";
import "../lib/Ownable.sol";

contract UpdatableConsumer is Consumer {

  constructor(address _ens, bytes32 _domain, bytes32 _specId) Ownable() public {
    specId = _specId;
  }

}
