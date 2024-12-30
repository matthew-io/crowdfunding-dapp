console.log("Ethers.js version:", ethers.version);

const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
const contractAbi = [
	{
		"inputs": [],
		"name": "Crowdfunder__CampaignFundsAreEmpty",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Crowdfunder__CampaignHasEnded",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Crowdfunder__CampaignIsOngoing",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Crowdfunder__InvalidCampaign",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Crowdfunder__NoEthSent",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Crowdfunder__NotCampaignOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Crowdfunder__WithdrawFailed",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "campaignFundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "contributionMade",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			}
		],
		"name": "contributeToCampaign",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_deadline",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "createCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCampaignCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			}
		],
		"name": "getCampaignDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountFunded",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_campaigns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountFunded",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			}
		],
		"name": "withdrawFromCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

let provider;
let signer;

async function connectWallet() {
    if (!window.ethereum) {
        console.error("No Ethereum provider found. Install Metamask.");
        return;
    }

    provider = new ethers.BrowserProvider(window.ethereum);

    try {
        await provider.send("eth_requestAccounts", []);
        console.log("Wallet connected!");

        signer = await provider.getSigner();
        const address = await signer.getAddress();

		localStorage.setItem("connectedWallet", address);

		console.log("Connected wallet address:", address);
		await getCampaignDetails();

    } catch (error) {
        console.error("Error connecting wallet:", error);
    }
}

async function createCampaign(ethAmount, deadline, title, description) { 
    if (!signer) {
        console.error("No wallet connected. Please connect your wallet first.");
        return;
    }

    try {
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
		console.log(signer)

        console.log("Interacting with the Crowdfunder contract...");
    
        const tx = await contract.createCampaign(
            ethers.parseEther(ethAmount.toString()),
            deadline,
            title,
            description
        );
    
        const receipt = await tx.wait();
        console.log("Transaction complete:", receipt);
		window.location.reload();
    } catch (error) {
        console.error("Error interacting with the contract:", error);
    }
}

async function getCampaignDetails() {
    if (!signer) {
        console.error("No wallet connected. Please connect your wallet first.");
        return;
    }

    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    try {
        const campaignLength = await contract.getCampaignCount();
        console.log("Total campaigns:", campaignLength.toString());

        let campaignList = document.getElementById("campaignsList");

        for (let i = 0; i < campaignLength; i++) {
            const campaign = await contract.getCampaignDetails(i);
            console.log("Campaign Details:", campaign);

			const campaignDiv = document.createElement("div");
            const listItem = document.createElement("li");
            const listButton = document.createElement("button");

			listButton.id = "contributeButton-" + i;

			listButton.textContent = "Contribute";
			listButton.addEventListener("click", () => contributeToCampaign(i));

			listItem.textContent = `Campaign ${i + 1}: ${campaign.title} - ${campaign.description} - ${ethers.formatEther(campaign.amountFunded.toString())} ETH`;
			
			campaignDiv.appendChild(listItem);
			campaignDiv.appendChild(listButton);

            campaignList.appendChild(campaignDiv);
        }
    } catch (error) {
        console.error("Error fetching campaign details:", error);
    }
}

async function contributeToCampaign(campaignId) {
	if (!signer) {
		console.error("No wallet detected");
		return;
	}

	try {
		const contract = new ethers.Contract(contractAddress, contractAbi, signer);

		const tx = await contract.contributeToCampaign(campaignId, {
			value: ethers.parseEther("1.0")
		});

		const receipt = await tx.wait();
		console.log("Succesfully contributed to campaign:", receipt);
		alert("Contribution successful!");
		window.location.reload();
	} catch (error) {
		console.error("Error contributing to campaign:", error);
	}
}

async function checkWalletConnection() {
    if (window.ethereum) {
        const savedAddress = localStorage.getItem("connectedWallet");
        if (savedAddress) {
            console.log("Wallet found in localStorage:", savedAddress);

            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_accounts", []); 

            if (accounts.some(account => account.toLowerCase() === savedAddress.toLowerCase())) { 
                console.log("Reconnected to wallet:", savedAddress);

                signer = await provider.getSigner();
                getCampaignDetails();
            } else {
                console.log("Saved wallet not currently connected.");
                localStorage.removeItem("connectedWallet"); 
            }
        } else {
            console.log("No wallet connected.");
        }
    }
}


const connectWalletButton = document.getElementById("connectWalletButton");
const createCampaignButton = document.getElementById("createCampaignButton");


connectWalletButton.addEventListener("click", () => {
    connectWallet();
});

document.addEventListener("DOMContentLoaded", async () => {
	await checkWalletConnection();
	if (signer)
		connectWalletButton.textContent = "Connected";
		connectWalletButton.disabled = true;
		connectWalletButton.style.cursor = 'not-allowed';
})

createCampaignButton.addEventListener("click", () => {
	event.preventDefault();

	const goal = document.getElementById("cGoal").value;
	const deadlineDays = document.getElementById("cDeadline").value;
	const title = document.getElementById("cTitle").value;
	const description = document.getElementById("cDesc").value;

	if (!goal || !deadlineDays || !title || !description) {
		console.error("all fields must be filled in.");
		alert("one or more fields are blank.. please fix!")
		return;
	}

	const deadline = Math.floor(Date.now() / 1000) + parseInt(deadlineDays) * 24 * 60  * 60;

	createCampaign(goal, deadline, title, description);
})