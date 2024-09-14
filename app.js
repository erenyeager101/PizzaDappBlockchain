
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
async function loadBlockchainData() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Initialize the contract
            pizzaContract = new web3.eth.Contract(contractABI, contractAddress);
            
            // Load available pizzas
            loadPizzas();
            
            // Display order history (if needed)
            // displayOrders();
        } catch (error) {
            console.error("User denied account access or an error occurred:", error);
            alert("Please enable MetaMask to use this DApp!");
        }
    } else {
        alert("Please install MetaMask to use this DApp!");
    }
}

// Function to display pizzas
async function loadPizzas() {
    try {
        const pizzas = await pizzaContract.methods.getAvailablePizzas().call();
        const pizzaList = document.getElementById('pizza-list');
        pizzaList.innerHTML = ''; // Clear existing pizzas

        pizzas.forEach((pizza, index) => {
            const pizzaCard = document.createElement('div');
            pizzaCard.innerHTML = `
                <img src="${index}.png" alt="${pizza.name}">
                <h3>${pizza.name}</h3>
                <p>Price: ${web3.utils.fromWei(pizza.price, 'ether')} ETH</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            `;
            pizzaList.appendChild(pizzaCard);
        });
    } catch (error) {
        console.error("Error loading pizzas:", error);
    }
}

// Function to add pizza to cart
async function addToCart(pizzaIndex) {
    try {
        const accounts = await web3.eth.getAccounts();
        await pizzaContract.methods.addToCart(pizzaIndex).send({ from: accounts[0] });
        alert('Pizza added to cart!');
    } catch (error) {
        console.error("Error adding pizza to cart:", error);
    }
}
async function viewCart() {
    try {
        const accounts = await web3.eth.getAccounts();
        const cart = await pizzaContract.methods.getCart().call({ from: accounts[0] });
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = ''; // Clear existing cart items

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <h3>${item.pizzaName}</h3>
                <p>Price: ${web3.utils.fromWei(item.price, 'ether')} ETH</p>
            `;
            cartList.appendChild(cartItem);
        });
    } catch (error) {
        console.error("Error viewing cart:", error);
    }
}
// Function to checkout
async function checkout() {
    try {
        const accounts = await web3.eth.getAccounts();
        const cart = await pizzaContract.methods.getCart().call({ from: accounts[0] });
        
        // Calculate total price
        const totalAmount = cart.reduce((total, item) => total + parseInt(item.price), 0);

        await pizzaContract.methods.checkout().send({
            from: accounts[0],
            value: totalAmount
        });
        alert('Transaction completed!');
    } catch (error) {
        console.error("Error during checkout:", error);
    }
}

// Attach event listeners
document.getElementById('checkout-button').addEventListener('click', checkout);
document.getElementById('view-cart-button').addEventListener('click', viewCart);

// Initialize Web3 and contract on page load
window.onload = loadBlockchainData;
