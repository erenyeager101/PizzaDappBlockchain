const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pizzaIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "toppingOption",
				"type": "uint256"
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
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "CouponIssued",
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
			}
		],
		"name": "coupons",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
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
						"internalType": "uint256[3]",
						"name": "prices",
						"type": "uint256[3]"
					}
				],
				"internalType": "struct PizzaShop.PizzaDetails[]",
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
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getCoupon",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct PizzaShop.Coupon",
				"name": "",
				"type": "tuple"
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
				"internalType": "struct PizzaShop.PizzaOrder[]",
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
const contractAddress = '0x525D48455cebd5A2413a0d36772E595060885A25';  // Replace with your deployed contract address


let web3 = new Web3(Web3.givenProvider);
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
let pizzaContract;

const pizzaMenuDiv = document.getElementById("pizza-menu");
const couponListDiv = document.getElementById("coupon-list");

window.onload = async function() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

  pizzaContract = new web3.eth.Contract(ABI, contractAddress);

  loadPizzas();
  loadCoupon(account);
};

// Load pizzas from contract
async function loadPizzas() {
  const pizzaList = await pizzaContract.methods.getAvailablePizzas().call();
  pizzaList.forEach((pizza, index) => {
    let pizzaCard = `
      <div class="pizza-card">
        <h2>${pizza.name}</h2>
        <ul>
          <li>Option 1: ${web3.utils.fromWei(pizza.prices[0], 'ether')} ETH</li>
          <li>Option 2: ${web3.utils.fromWei(pizza.prices[1], 'ether')} ETH</li>
          <li>Option 3: ${web3.utils.fromWei(pizza.prices[2], 'ether')} ETH</li>
        </ul>
        <button onclick="buyPizza(${index}, 0)">Buy Option 1</button>
        <button onclick="buyPizza(${index}, 1)">Buy Option 2</button>
        <button onclick="buyPizza(${index}, 2)">Buy Option 3</button>
      </div>`;
    pizzaMenuDiv.innerHTML += pizzaCard;
  });
}

// Buy pizza function
async function buyPizza(pizzaIndex, toppingOption) {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

  const pizza = await pizzaContract.methods.availablePizzas(pizzaIndex).call();
  const price = pizza.prices[toppingOption];

  await pizzaContract.methods.buyPizza(pizzaIndex, toppingOption).send({
    from: account,
    value: price
  });
  alert("Pizza ordered successfully!");
  loadCoupon(account);
}

// Load user coupons
async function loadCoupon(account) {
  const coupon = await pizzaContract.methods.getCoupon(account).call();
  if (coupon.isActive) {
    couponListDiv.innerHTML = `You have a coupon worth ${web3.utils.fromWei(coupon.value, 'ether')} ETH`;
  } else {
    couponListDiv.innerHTML = "No active coupons available.";
  }
}
