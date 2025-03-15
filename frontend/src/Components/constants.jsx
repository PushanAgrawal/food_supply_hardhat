export const contractAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const  abi =[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "PurchaseOrderID",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "PaymentInitiated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "PurchaseOrderID",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "PaymentRecived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "PurchaseOrderID",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "PurchaceOrderConfirmed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "PurchaseOrderID",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "Buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "Seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "PurchasOrderPlaced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "PurchaseOrderID",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "ShippingInitiated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "code",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "itemType",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "newItem",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfshash",
          "type": "string"
        }
      ],
      "name": "updated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "code",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "itemType",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "updateitemDetails",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfshash",
          "type": "string"
        }
      ],
      "name": "addConsumer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfshash",
          "type": "string"
        }
      ],
      "name": "addDistributor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfshash",
          "type": "string"
        }
      ],
      "name": "addFarmer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "code",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "itemType",
          "type": "string"
        }
      ],
      "name": "addItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfshash",
          "type": "string"
        }
      ],
      "name": "addProcessor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfshash",
          "type": "string"
        }
      ],
      "name": "addRetailer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfshash",
          "type": "string"
        }
      ],
      "name": "addSeedproducer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "check",
          "type": "uint32"
        },
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        }
      ],
      "name": "buyItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfsS",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfsR",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "ipfsI",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "code",
          "type": "string[]"
        },
        {
          "internalType": "string",
          "name": "itemType",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "check",
          "type": "uint32"
        }
      ],
      "name": "confirmItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        }
      ],
      "name": "consumerExists",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
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
          "name": "a",
          "type": "address"
        }
      ],
      "name": "distributorExists",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
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
          "name": "a",
          "type": "address"
        }
      ],
      "name": "farmerExists",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        }
      ],
      "name": "getItemHash",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        }
      ],
      "name": "getTrancHash",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
          "internalType": "address",
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
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "paymentInitiated",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "paymentReceived",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "a",
          "type": "address"
        }
      ],
      "name": "processorExists",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
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
          "name": "a",
          "type": "address"
        }
      ],
      "name": "retailerExists",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
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
          "name": "a",
          "type": "address"
        }
      ],
      "name": "seedproducerExists",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "shippingInitiated",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfs",
          "type": "string"
        }
      ],
      "name": "shippingReceived",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]