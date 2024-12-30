// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract Crowdfunder {

    // Errors

    event Debug(string message);
    error Crowdfunder__NoEthSent(); //  if no eth sent to contract balance
    error Crowdfunder__InvalidCampaign(); // no campaign exists at given ID
    error Crowdfunder__CampaignHasEnded(); // if campaign has gone past the deadline (for contributing)
    error Crowdfunder__CampaignIsOngoing(); // if campaign is still on going (for withdrawing)
    error Crowdfunder__NotCampaignOwner(); // if user attempts to withdraw from campaign and is not the owner
    error Crowdfunder__CampaignFundsAreEmpty(); // if there are no funds associated with a given campaign, used in withdrawal
    error Crowdfunder__WithdrawFailed(); // if campaign fund withdrawl fails

    // Events

    event contributionMade(uint256 indexed campaignId, address indexed contributor, uint256 amount); // emitted whenever a contribution is made to a campaign
    event campaignFundsWithdrawn(uint256 indexed campaignId, address indexed creator, uint256 amount); // emitted whenever funds are withdrawn from a campaign
    event DebugString(string message);
    event DebugUint(string message, uint256 value);

    // Structs
    
    struct Campaign {
        uint256 goal;
        uint256 deadline;
        uint256 amountFunded;
        mapping(address => uint256) contributors;
        string title;
        string description;
        address creator;
        bool isActive;
    }

    // Storage variables

    Campaign[] public s_campaigns;

    // Main Functionality

    function createCampaign(
        uint256 _goal,
        uint256 _deadline,
        string calldata _title,
        string calldata _description
    ) external {
        Campaign storage newCampaign = s_campaigns.push();
        newCampaign.goal = _goal;
        newCampaign.deadline = _deadline;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.creator = msg.sender;
        newCampaign.isActive = true;
    }

    function contributeToCampaign(uint256 campaignId) external payable {
        if (campaignId >= s_campaigns.length)
            revert Crowdfunder__InvalidCampaign();

        if (msg.value <= 0)
            revert Crowdfunder__NoEthSent();

        Campaign storage campaign = s_campaigns[campaignId];

        if (block.timestamp > campaign.deadline)
            revert Crowdfunder__CampaignHasEnded();

        campaign.amountFunded += msg.value;
        campaign.contributors[msg.sender] += msg.value;

        if (campaign.amountFunded == campaign.goal)
            campaign.isActive = false;

        emit contributionMade(campaignId, msg.sender, msg.value);
    }

    function getCampaignCount() public view returns(uint256) {
        return s_campaigns.length;
    }    

    function getCampaignDetails(uint256 campaignId) external view validCampaignId(campaignId) returns (
        uint256 goal,
        uint256 deadline,
        uint256 amountFunded,
        string memory title,
        string memory description,
        address creator,
        bool isActive
    ) {
       
        Campaign storage campaign = s_campaigns[campaignId];

        return (
            campaign.goal,
            campaign.deadline,
            campaign.amountFunded,
            campaign.title,
            campaign.description,
            campaign.creator,
            campaign.isActive
        );
    }

    function withdrawFromCampaign(uint256 campaignId) external validCampaignId(campaignId) {
        Campaign storage campaign = s_campaigns[campaignId];

        if (msg.sender != campaign.creator) {
            revert Crowdfunder__NotCampaignOwner();
        }

        if (block.timestamp <= campaign.deadline && campaign.amountFunded != campaign.goal) {
            revert Crowdfunder__CampaignIsOngoing();
        }

        if (campaign.amountFunded == 0) {
            revert Crowdfunder__CampaignFundsAreEmpty();
        }

        uint256 amountToWithdraw = campaign.amountFunded;
        campaign.amountFunded = 0;
        campaign.isActive = false;

        (bool success, ) = campaign.creator.call{value: amountToWithdraw}("");
        if (!success) {
            emit Debug("Withdraw failed");
            revert Crowdfunder__WithdrawFailed();
        }

        emit campaignFundsWithdrawn(campaignId, msg.sender, amountToWithdraw);
    }

    modifier validCampaignId(uint256 campaignId) {
        if (campaignId >= s_campaigns.length)
            revert Crowdfunder__InvalidCampaign();
        _;
    }
}