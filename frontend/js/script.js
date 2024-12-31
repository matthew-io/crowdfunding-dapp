console.log("Ethers.js version:", ethers.version);

const contractAddress = "0xEC59c8B9007db6b5E98374E6a379255FEb29CB49";
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

        connectWalletButton.textContent = "Disconnect";
        connectWalletButton.onclick = disconnectWallet;

    } catch (error) {
        console.error("Error connecting wallet:", error);
    }
}

async function disconnectWallet() {
    console.log("Disconnecting wallet...");
    
    signer = null;
    provider = null;

    localStorage.removeItem("connectedWallet");

    connectWalletButton.textContent = "Connect Wallet";
    connectWalletButton.onclick = connectWallet;

    console.log("Wallet disconnected!");
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

let hasFetchedCampaigns = false;

async function getCampaignDetails() {
    if (hasFetchedCampaigns) return;
    hasFetchedCampaigns = true;

    provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545"); 

    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

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

            const campaignRow = document.createElement("div");
            campaignRow.classList.add("columns", "is-vcentered", "is-mobile", "mb-2");

            const titleColumn = document.createElement("div");
            titleColumn.classList.add("column", "is-two-thirds");
            const campaignTitle = document.createElement("h3");
            campaignTitle.classList.add("title", "is-4", "mb-0");
            campaignTitle.textContent = `Campaign ${i + 1}: ${campaign.title}`;
            titleColumn.appendChild(campaignTitle);

            const timerColumn = document.createElement("div");
            timerColumn.classList.add("column", "is-one-third", "has-text-right");
            const timerElement = document.createElement("span");
            timerElement.classList.add("is-size-6", "has-text-grey-light");
            timerElement.id = `timer-${i}`;
            timerColumn.appendChild(timerElement);

            campaignRow.appendChild(titleColumn);
            campaignRow.appendChild(timerColumn);

            campaign.isActive ? startCountdown(parseInt(campaign.deadline), `timer-${i}`) : "";

            campaignDiv.appendChild(campaignRow);


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

function startCountdown(deadline, timerId) {
    const interval = setInterval(() => {
        const now = Math.floor(Date.now() / 1000);
        const timeLeft = deadline - now;

        if (timeLeft <= 0) {
            document.getElementById(timerId).textContent = "Campaign Ended";
            clearInterval(interval);
        } else {
            const days = Math.floor(timeLeft / (24 * 60 * 60));
            const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
            const seconds = timeLeft % 60;

            document.getElementById(timerId).textContent =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
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
        
        Swal.fire({
            position: "top-end",
            width: 300,
            title: "Contribution of " + ethAmount + " ETH was successful!",
            showConfirmationButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.reload()
        }, 2000);

        
    } catch (error) {
        console.error("Error contributing to campaign:", error);
    }

   

}

async function withdrawFromCampaign(campaignId) {
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    const campaign = await contract.getCampaignDetails(campaignId);

    console.log(campaign.creator)

    if (!signer) {
        console.error("No wallet detected");
        return;
    }

    if (signer.address != campaign.creator) {
        console.error("Can't withdraw. You are not the creator of this campaign.")
        Swal.fire({
            position: "top-end",
            icon: "error",
            width: 300,
            title: "Failed to withdraw. You are not the owner of this campaign.",
            timer: 1500
        });
        return;
    }

    try {

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
    if (!hasFetchedCampaigns) await getCampaignDetails();
    if (signer) {
        connectWalletButton.textContent = "Disconnect";
        connectWalletButton.onclick = disconnectWallet;
    } else {
        connectWalletButton.textContent = "Connect Wallet";
        connectWalletButton.onclick = connectWallet;
    }
});

createCampaignButton.addEventListener("click", () => {
	event.preventDefault();

	const goal = document.getElementById("cGoal").value;
	const deadlineDays = document.getElementById("cDeadline").value;
	const title = document.getElementById("cTitle").value;
	const description = document.getElementById("cDesc").value;

	if (!goal || !deadlineDays || !title || !description) {
		console.error("all fields must be filled in.");
        Swal.fire({
            position: "top-end",
            icon: "error",
            width: 300,
            title: "You must fill in all fields.",
            timer: 1500
        });
		return;
	}

    if (parseInt(deadlineDays) < 1) {
        console.error("Deadline must be at least 1 day!")
        Swal.fire({
            position: "top-end",
            icon: "error",
            width: 300,
            title: "Deadline must be at least 1 day!",
            timer: 1500
        });
        return;
    }

    if (goal < 0.1) {
        console.error("Goal amount must be at least 0.1 ETH!")
        Swal.fire({
            position: "top-end",
            icon: "error",
            width: 300,
            title: "Goal amount must be at least 0.1 ETH!",
            timer: 1500
        });
        return;
    }

	const deadline = Math.floor(Date.now() / 1000) + parseInt(deadlineDays) * 24 * 60  * 60;

	createCampaign(goal, deadline, title, description);
})

if (window.ethereum) {
    window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length === 0) {
            console.log("Wallet disconnected or no accounts available.");
            localStorage.removeItem("connectedWallet");
            signer = null; 
            provider = null;
            window.location.reload(); 
        } else {
            console.log("Account changed:", accounts[0]);
            localStorage.setItem("connectedWallet", accounts[0]);

            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
        }
    });

    window.ethereum.on('chainChanged', (chainId) => {
        console.log("Network changed to:", chainId);
        window.location.reload();
    });
}


const modal = document.getElementById("createCampaignModal");
const openModalButton = document.getElementById("createCampaignModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const cancelModalButton = document.getElementById("cancelModalButton");

const openModal = () => modal.classList.add("is-active");
const closeModal = () => modal.classList.remove("is-active");

openModalButton.addEventListener("click", () => {
    if (!signer) {
        console.error("Can't create a campaign. You need to connect a wallet first.");
        Swal.fire({
            position: "top-end",
            icon: "error",
            width: 300,
            title: "Can't create a campaign. You need to connect a wallet first.",
            timer: 1500
        });
        return;
    }

    openModal();
});

closeModalButton.addEventListener("click", closeModal);
cancelModalButton.addEventListener("click", closeModal);