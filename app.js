const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pizzaIndex",
				"type": "uint256"
			}
		],
		"name": "addToCart",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkout",
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
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "PizzaAddedToCart",
		"type": "event"
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
		"name": "getCart",
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
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userCarts",
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
	}
];
const contractAddress = '0xAF463EDD2002B6075c396436e9Ac9B4355638a51';  // Replace with your deployed contract address


// Initialize Web3
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");



const pizzaContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to display pizzas
async function loadPizzas() {
    const pizzas = await pizzaContract.methods.getAvailablePizzas().call();
    const pizzaList = document.getElementById('pizza-list');

    pizzas.forEach((pizza, index) => {
        const pizzaCard = document.createElement('div');
        pizzaCard.innerHTML = `
            <img src="pizza${index}.jpg" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>Price: ${web3.utils.fromWei(pizza.price, 'ether')} ETH</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        pizzaList.appendChild(pizzaCard);
    });
}

// Function to add pizza to cart
async function addToCart(pizzaIndex) {
    const accounts = await web3.eth.getAccounts();
    await pizzaContract.methods.addToCart(pizzaIndex).send({ from: accounts[0] });
    alert('Pizza added to cart!');
}

// Function to checkout
async function checkout() {
    const accounts = await web3.eth.getAccounts();
    const cart = await pizzaContract.methods.getCart().call({ from: accounts[0] });
    
    // Calculate total price
    const totalAmount = cart.reduce((total, item) => total + parseInt(item.price), 0);

    await pizzaContract.methods.checkout().send({
        from: accounts[0],
        value: totalAmount
    });
    alert('Transaction completed!');
}

// Attach event listeners
document.getElementById('checkout-button').addEventListener('click', checkout);

// Load pizzas on page load
loadPizzas();

