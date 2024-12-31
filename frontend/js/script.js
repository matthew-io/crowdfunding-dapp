console.log("Ethers.js version:", ethers.version);

const contractAddress = "0x3b8aD993530426e2bd4Ce3C264Af8685d4F46667";
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
			},
			{
				"internalType": "bool",
				"name": "fundsWithdrawn",
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
			},
			{
				"internalType": "bool",
				"name": "fundsWithdrawn",
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
        console.error("No Ethereum provider found. A wallet is required.");
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

    // this is shambolic i know

    try {
        const campaignLength = await contract.getCampaignCount();
        console.log("Total campaigns:", campaignLength.toString());

        let campaignList = document.getElementById("campaignsList");
        let completedCampaignList = document.getElementById("completedCampaignsList");
        campaignList.innerHTML = "";
        completedCampaignList.innerHTML = "";

        for (let i = 0; i < campaignLength; i++) {
            const campaign = await contract.getCampaignDetails(i);
            console.log("Campaign Details:", campaign);

            const campaignDiv = document.createElement("div");
            campaignDiv.classList.add("box", "has-shadow", "mb-4", "p-4");

            const campaignTitle = document.createElement("h3");
            campaignTitle.classList.add("title", "is-4", "mb-2");
            campaignTitle.textContent = `Campaign ${i + 1}: ${campaign.title}`;
            campaignDiv.appendChild(campaignTitle);

            const campaignDescription = document.createElement("p");
            campaignDescription.classList.add("content", "mb-4");
            campaignDescription.textContent = campaign.description;
            campaignDiv.appendChild(campaignDescription);

            const progressBarDiv = document.createElement("div");
            progressBarDiv.classList.add("has-text-centered", "mb-3");

            const progressBar = document.createElement("progress");
            progressBar.classList.add("progress", "is-primary", "mb-1");

            const progressLabel = document.createElement("span");
            progressLabel.classList.add("is-size-6", "has-text-grey-light");

            if (campaign.isActive) {
                progressBar.value = ethers.formatEther(campaign.amountFunded.toString());
                progressBar.max = ethers.formatEther(campaign.goal.toString());
                progressLabel.textContent =
                    `${ethers.formatEther(campaign.amountFunded.toString())} / `
                    + `${ethers.formatEther(campaign.goal.toString())} ETH`;
            } else {
                progressBar.value = ethers.formatEther(campaign.goal.toString());
                progressBar.max = ethers.formatEther(campaign.goal.toString());
                progressLabel.textContent =
                    `${ethers.formatEther(campaign.goal.toString())} / `
                    + `${ethers.formatEther(campaign.goal.toString())} ETH`;
            }

            progressBarDiv.appendChild(progressBar);
            progressBarDiv.appendChild(progressLabel);
            campaignDiv.appendChild(progressBarDiv);

            const contributeRow = document.createElement("div");
            contributeRow.classList.add("columns", "is-mobile", "is-vcentered", "mb-3");

            const inputColumn = document.createElement("div");
            inputColumn.classList.add("column", "is-half");
            const contributeInput = document.createElement("input");
            contributeInput.classList.add("input", "is-fullwidth");
            contributeInput.type = "number";
            contributeInput.placeholder = "Amount in ETH";
            contributeInput.step = 0.1;
            inputColumn.appendChild(contributeInput);

            const buttonColumn = document.createElement("div");
            buttonColumn.classList.add("column", "is-half");
            const contributeButton = document.createElement("button");
            contributeButton.classList.add("button", "is-primary", "is-fullwidth");
            contributeButton.textContent = "Contribute";

            contributeButton.addEventListener("click", () => {
                const amount = contributeInput.value.trim();
                if (!amount || isNaN(amount) || Number(amount) <= 0) {
                    alert("Please enter a valid ETH amount");
                    return;
                }
                contributeToCampaign(i, amount);
            });

            buttonColumn.appendChild(contributeButton);
            contributeRow.appendChild(inputColumn);
            contributeRow.appendChild(buttonColumn);
       
            const withdrawRow = document.createElement("div");
            withdrawRow.classList.add("is-mobile", "mb-3");

            const withdrawCol = document.createElement("div");
            const withdrawButton = document.createElement("button");
            withdrawButton.classList.add("button", "is-warning", "is-fullwidth");
            withdrawButton.textContent = "Withdraw";

            if (campaign.fundsWithdrawn) {
                withdrawButton.disabled = true;
                withdrawButton.style.cursor = "not-allowed";
            }

            withdrawButton.addEventListener("click", () => withdrawFromCampaign(i));

            withdrawCol.appendChild(withdrawButton);
            withdrawRow.appendChild(withdrawCol);

            if (campaign.isActive) {
                campaignDiv.appendChild(contributeRow);
                campaignList.appendChild(campaignDiv);
            } else {
                campaignDiv.appendChild(withdrawRow);
                completedCampaignList.appendChild(campaignDiv);
            }
        }
    } catch (error) {
        console.error("Error fetching campaign details:", error);
    }
}

async function contributeToCampaign(campaignId, ethAmount) {
    if (!signer) {
        console.error("No wallet detected");
        return;
    }

    try {
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const tx = await contract.contributeToCampaign(campaignId, {
            value: ethers.parseEther(ethAmount)
        });

        const receipt = await tx.wait();
        console.log("Successfully contributed to campaign:", receipt);
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