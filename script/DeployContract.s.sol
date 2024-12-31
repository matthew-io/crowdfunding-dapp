// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

import "forge-std/Script.sol";
import { Crowdfunder } from "../src/Crowdfunder.sol";

contract DeployContract is Script {
    function run() external {
        vm.startBroadcast();

        Crowdfunder crowdfunder = new Crowdfunder();
        console.log("Crowdfunder contract deploy at: ", address(crowdfunder));

        vm.stopBroadcast();
    }
}