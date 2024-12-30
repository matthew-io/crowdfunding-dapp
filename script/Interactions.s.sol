// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import { Crowdfunder } from "../src/Crowdfunder.sol";

contract Interactions is Script {
    address sepoliaContractAddress = 0x45cbFfEfEfaA427F163eFbbeA0B9296Ed2678222;

    function run() external {
        Crowdfunder crowdfunder = Crowdfunder(sepoliaContractAddress);

        vm.startBroadcast();
        crowdfunder.createCampaign(
            10 ether, // goal amount in ether
            block.timestamp + 7 days, // deadline in days
            "Marathon Crowdfunder", // title for campaign
            "Sponsor me for running the nyc marathon" // description of campaign
        );
        console.log("Campaign created");

        // retrieves the campaign from storage
        (
            uint256 goal,
            uint256 deadline,
            uint256 amountFunded,
            string memory title,
            string memory description,
            address creator,
            bool isActive
        ) = crowdfunder.getCampaignDetails(0);

        console.log("Goal:", goal);
        console.log("Deadline:", deadline);
        console.log("Amount Funded:", amountFunded);
        console.log("Campaign Title:", title);
        console.log("Description:", description);
        console.log("Address:", creator);
        console.log("Active:", isActive);

        vm.stopBroadcast();
    }  
}