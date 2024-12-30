console.log("Ethers.js version:", ethers.version);

const contractAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b";
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
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "Debug",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "DebugString",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "DebugUint",
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
    } catch (error) {
        console.error("Error interacting with the contract:", error);
    }

    window.location.reload();

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
        let completedCampaignList = document.getElementById("completedCampaignsList");
        campaignList.innerHTML = "";
        completedcampaignList = "";

        for (let i = 0; i < campaignLength; i++) {
            const campaign = await contract.getCampaignDetails(i);
            console.log("Campaign Details:", campaign);

            const campaignDiv = document.createElement("div");
            const campaignTitle = document.createElement("h3");
            const campaignDescription = document.createElement("p");
            const progressBarDiv = document.createElement("div");
            const progressBar = document.createElement("progress");
            const progressLabel = document.createElement("span");
            const contributeButton = document.createElement("button");
            const withdrawButton = document.createElement("button");

            campaignDiv.classList.add("box", "has-shadow", "mb-4", "p-4");
            campaignTitle.classList.add("title", "is-4", "mb-2");
            campaignDescription.classList.add("content", "mb-4");
            progressBarDiv.classList.add("has-text-centered", "mb-3");
            progressBar.classList.add("progress", "is-primary", "mb-1");
            progressLabel.classList.add("is-size-6", "has-text-grey-light");
            contributeButton.classList.add("button", "is-primary");
            withdrawButton.classList.add("button", "is-warning");

            console.log(campaign.isActive)

            if (campaign.isActive) {
                progressBar.value = ethers.formatEther(campaign.amountFunded.toString());
                progressBar.max = ethers.formatEther(campaign.goal.toString());
                progressLabel.textContent = `${ethers.formatEther(campaign.amountFunded.toString())} / ${ethers.formatEther(campaign.goal.toString())} ETH`;
            } else {
                progressBar.value = ethers.formatEther(campaign.goal.toString());
                progressBar.max = ethers.formatEther(campaign.goal.toString());
                progressLabel.textContent = `${ethers.formatEther(campaign.goal.toString())} / ${ethers.formatEther(campaign.goal.toString())} ETH`;
            }
    

            campaignTitle.textContent = `Campaign ${i + 1}: ${campaign.title}`;
            campaignDescription.textContent = campaign.description;
            contributeButton.textContent = "Contribute";
            withdrawButton.textContent = 'Withdraw';
            contributeButton.addEventListener("click", () => contributeToCampaign(i));
            withdrawButton.addEventListener("click", () => withdrawFromCampaign(i));

            progressBarDiv.appendChild(progressBar);
            progressBarDiv.appendChild(progressLabel);

            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("columns", "is-mobile");

            const contributeColumn = document.createElement("div");
            contributeColumn.classList.add("column");
            const withdrawColumn = document.createElement("div");
            withdrawColumn.classList.add("column");

            contributeButton.classList.add("is-fullwidth");
            withdrawButton.classList.add("is-fullwidth");

            contributeColumn.appendChild(contributeButton);
            withdrawColumn.appendChild(withdrawButton);

            buttonContainer.appendChild(contributeColumn);
            buttonContainer.appendChild(withdrawColumn);
            
            campaignDiv.appendChild(campaignTitle);
            campaignDiv.appendChild(campaignDescription);
            campaignDiv.appendChild(progressBarDiv);

            if (campaign.isActive) {
                campaignDiv.appendChild(buttonContainer);
                campaignList.appendChild(campaignDiv);
            } else {
                completedCampaignList.appendChild(campaignDiv);
            }
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

async function withdrawFromCampaign(campaignId) {
    if (!signer) {
        console.error("No wallet detected");
        return;
    }

    try {
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const tx = await contract.withdrawFromCampaign(campaignId);
        const receipt = await tx.wait();
        console.log("Successfully withdrew!", receipt);
        
        window.location.reload();
        
    } catch (error) {
        console.log("Could not withdraw from campaign.", error);
        return;
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
	if (signer) {
		connectWalletButton.textContent = "Connected";
		connectWalletButton.disabled = true;
		connectWalletButton.style.cursor = 'not-allowed';
	} else {
		connectWalletButton.textContent = 'Connect Wallet';
		connectWalletButton.disable = false;
		connectWalletButton.style.cursor = 'normal';
	};
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

const modal = document.getElementById("createCampaignModal");
const openModalButton = document.getElementById("createCampaignModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const cancelModalButton = document.getElementById("cancelModalButton");

const openModal = () => modal.classList.add("is-active");
const closeModal = () => modal.classList.remove("is-active");

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
cancelModalButton.addEventListener("click", closeModal);