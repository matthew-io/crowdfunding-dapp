// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { Script, console } from "forge-std/Script.sol";
import { Crowdfunder } from "../src/Crowdfunder.sol";

contract FundCampaign is Script {
    uint256 constant SEND_VALUE = 0.1 ether;

    function run() external {

        Crowdfunder crowdfunder = new Crowdfunder();
        vm.startBroadcast();
        
        crowdfunder.createCampaign(
            10 ether,
            block.timestamp + 7 days,
            "Test Campaign",
            "Campaign for testing"
        );
        console.log("Campaign created");

        crowdfunder.contributeToCampaign{value: SEND_VALUE}(0);  
        console.log("Contributed:", SEND_VALUE);

        (
            ,,uint256 amountFunded,,,,
        ) = 
        crowdfunder.getCampaignDetails(0);

        console.log(amountFunded);

        vm.stopBroadcast();
    }
}