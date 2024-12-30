// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { Test } from "forge-std/Test.sol";
import { Crowdfunder } from "../src/Crowdfunder.sol";

contract CrowdfunderTest is Test {
    Crowdfunder crowdfunder;

    function setUp() public {
        crowdfunder = new Crowdfunder();
        vm.warp(1);
    }

    function testCreateCampaign() public {
        uint256 initialCampaignCount = crowdfunder.getCampaignCount();
        uint256 goal = 100 ether;
        uint256 deadline = block.timestamp + 7 days;

        crowdfunder.createCampaign(goal, deadline, "Test Campaign", "Test Description");

        uint256 finalCampaignCount = crowdfunder.getCampaignCount();
        assertEq(initialCampaignCount + finalCampaignCount, 1);

        (uint256 storedGoal, uint256 storedDeadline, , string memory storedTitle, , address creator) = 
        crowdfunder.getCampaignDetails(0);

        assertEq(storedGoal, goal);
        assertEq(storedDeadline, deadline);
        assertEq(storedTitle, "Test Campaign");
        assertEq(creator, address(this));
    }

    function testContributeToCampaign() public {
        uint256 goal = 100 ether;
        uint256 deadline = block.timestamp + 7 days;

        crowdfunder.createCampaign(goal, deadline, "Test Campaign", "Test Description");
        (,,uint256 initialAmountFunded,,,) = crowdfunder.getCampaignDetails(0);

        crowdfunder.contributeToCampaign{value: 1 ether}(0);
        
        (,,uint256 amountFunded,,,) = crowdfunder.getCampaignDetails(0);

        assertEq(amountFunded + initialAmountFunded, 1 ether);
    }
}