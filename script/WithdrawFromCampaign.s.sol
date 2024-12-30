// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { Script, console } from "forge-std/Script.sol";
import { Crowdfunder } from "../src/Crowdfunder.sol";

contract WithdrawFromCampaign is Script {
    uint256 constant SEND_VALUE = 10 ether;

    function run() external {
        vm.startBroadcast();
        Crowdfunder crowdfunder = new Crowdfunder();
        crowdfunder.createCampaign(
            SEND_VALUE,
            block.timestamp + 7 days,
            "test",
            'test campaign'
        );
        console.log("Campaign created");

       
        crowdfunder.contributeToCampaign{value: SEND_VALUE}(0);
        console.log("Contributed:", SEND_VALUE);

         (
            uint256 goal,,uint256 amountFunded,,,,
        ) = crowdfunder.getCampaignDetails(0);

        console.log("Amount funded = goal?", goal == amountFunded);

        crowdfunder.withdrawFromCampaign(0);
        console.log("Successfully withdrawn from campaign");

        vm.stopBroadcast();
    }
}