const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pizzaIndex",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "toppings",
				"type": "string"
			}
		],
		"name": "buyPizza",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "pizzaName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "toppings",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "PizzaOrdered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "availablePizzas",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAvailablePizzas",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct Pizza.PizzaDetails[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOrders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "pizzaName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "toppings",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "buyer",
						"type": "address"
					}
				],
				"internalType": "struct Pizza.PizzaOrder[]",
				"name": "",
				"type": "tuple[]"
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
		"name": "orders",
		"outputs": [
			{
				"internalType": "string",
				"name": "pizzaName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "toppings",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = '0xf9DE8Df1C750d165A6312B8c0EdE880e912295F5';  // Replace with your deployed contract address


let web3;
let contract;
let selectedPizzaIndex = null;

async function loadBlockchainData() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        contract = new web3.eth.Contract(contractABI, contractAddress);

        // Display order history
        displayOrders();
    } else {
        alert("Please install MetaMask to use this DApp!");
    }
}

function selectPizza(index) {
    selectedPizzaIndex = index;
    alert(`You have selected pizza #${index + 1}`);
}

function getSelectedToppings() {
    let selectedToppings = [];
    if (document.getElementById('cheese').checked) selectedToppings.push("Cheese");
    if (document.getElementById('pepperoni-topping').checked) selectedToppings.push("Pepperoni");
    if (document.getElementById('mushrooms').checked) selectedToppings.push("Mushrooms");
    if (document.getElementById('olives').checked) selectedToppings.push("Olives");
    return selectedToppings.join(', ');
}

async function buyPizza() {
    if (selectedPizzaIndex === null) {
        alert("Please select a pizza first!");
        return;
    }

    const toppings = getSelectedToppings();
    const accounts = await web3.eth.getAccounts();
    
    const pizza = await contract.methods.getAvailablePizzas().call(selectedPizzaIndex);
    const pizzaPrice = pizza[selectedPizzaIndex].price;

    // Send transaction
    await contract.methods.buyPizza(selectedPizzaIndex, toppings).send({
        from: accounts[0],
        value: pizzaPrice
    });

    // Reload order history
    displayOrders();
}

async function buyPizza() {
    if (selectedPizzaIndex === null) {
        alert("Please select a pizza first!");
        return;
    }

    const toppings = getSelectedToppings();
    const accounts = await web3.eth.getAccounts();
    
    console.log('Selected Pizza Index:', selectedPizzaIndex);
    console.log('Toppings:', toppings);
    console.log('User Account:', accounts[0]);

    // Fetch price from the contract
    try {
        const pizzaPrice = web3.utils.toWei('0.01', 'ether');  // Use actual price logic for different pizzas
        console.log('Pizza Price (in Wei):', pizzaPrice);

        // Send transaction
        await contract.methods.buyPizza('Customer Name', toppings).send({
            from: accounts[0],
            value: pizzaPrice
        });

        alert("Transaction successful! Pizza ordered.");
        // Reload order history
        displayOrders();
    } catch (error) {
        console.error(error);
        alert("Transaction failed. Please try again.");
    }
}
