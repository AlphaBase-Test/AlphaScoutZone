var walletBut = document.getElementById("wallet");
var connectedAddress;
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var cover = document.getElementById("cover");
var cover2 = document.getElementById("cover2");

walletBut.addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const Accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("MTMSK Connected");
      connectedAddress = Accounts[0];
      console.log(connectedAddress);
      walletBut.innerText = "Connected";
      walletBut.style.paddingLeft = "3vw";
      walletBut.style.background = "#076c0071";
      walletBut.style.width = "6.8vw";
      walletBut.style.fontSize = "1vw";
      walletBut.style.marginLeft = "5.5vw";
      walletBut.style.marginTop = "-2vh";
      walletBut.style.boxShadow = "inset 0vw 0vw 0.5vw rgba(27, 173, 17, 0.818)";
      walletBut.style.height = "5vh";
      msg1.style.display = "none";
      cover.style.display = "none";
      mrc.innerHTML = await contract3.methods
        .seeMyCode(connectedAddress)
        .call();
      showEthAddress();
      seeAlphasImFollowing();
      getValidatorPoints();
      seePricesJs();
    } catch (error) {
      console.log("ERROR al Conectar MTMSK");
    }
  } else {
    console.log("MTMSK Not Detected");
  }
});

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const Accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("MTMSK Connected");
      connectedAddress = Accounts[0];
      console.log(connectedAddress);
      walletBut.innerText = "Connected";
      walletBut.style.background = "#076c0071";
      walletBut.style.width = "6.8vw";
      walletBut.style.fontSize = "1vw";
      walletBut.style.marginLeft = "5vw";
      walletBut.style.marginTop = "-2vh";
      walletBut.style.boxShadow = "inset 0vw 0vw 0.5vw rgba(27, 173, 17, 0.818)";
      walletBut.style.height = "5vh";
      msg1.style.display = "none";
      cover.style.display = "none";
      mrc.innerHTML = "My code: " + await contract3.methods
        .seeMyCode(connectedAddress)
        .call() ;
      showEthAddress();
      seeAlphasImFollowing();
      getValidatorPoints();
      seeImfollowingAlphas();
      seePricesJs();

    } catch (error) {
      console.log("ERROR al Conectar MTMSK"+ error);
    }
  } else {
    console.log("MTMSK Not Detected 2" + error);
  }
}

connect();

function showEthAddress() {
  var start = connectedAddress.slice(0, 6);
  var end = connectedAddress.slice(-4);

  document.getElementById("address").innerText = `${start}...${end}`;
  document.getElementById("address2").innerText = `${start}...${end}`;
}

//CONTRACT:

// ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI

const ABI = [
  {
    inputs: [],
    name: "becomeAlpha",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "changePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "plan",
        type: "uint8",
      },
    ],
    name: "payAlpha",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "payFullAnnual",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "payFullAnnualRefDiscount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "payFullMonth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "payFullMonthRefDiscount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "setActualPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_chatId",
        type: "string",
      },
    ],
    name: "setAlphaBaseBot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mon",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ann",
        type: "uint256",
      },
    ],
    name: "setFullPrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "plan",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setPriceAlphaPlans",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFromAlphaBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "actualPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addAllAlphaAccuracy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addAllAlphaScores",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "alphaAmountTotalSignals",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "b",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "c",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "canSeeThisAlpha",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "checkNameList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ethInContractThisPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getChatId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "i",
        type: "uint32",
      },
    ],
    name: "getIndexChatIdList",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getNumSignals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "isActiveAlpha",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodNum",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "searchName",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
    ],
    name: "seeActiveAlphaAccu",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
    ],
    name: "seeActiveAlphaScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "seeAllActiveAlpha",
    outputs: [
      {
        internalType: "address[]",
        name: "combined",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeAlphaFollowersLen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeAlphaPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "seeAlphasFollowing",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "seeDiscPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeIfHasWithd",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeImFollowingListLen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeLastPay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeNextTimePayThisAlpha",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "seePrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeTotalAlphaScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeTotalValidatorScore",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "index",
        type: "uint16",
      },
    ],
    name: "seeTraSig",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "i",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "address",
        name: "reader",
        type: "address",
      },
    ],
    name: "seeTraSig2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "showEarnedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalAlphaScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "volume",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdrawThisPeriod",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const ABI2 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accuracyPer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "accuracyPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "actualPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "_priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "_stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "_takeProfit",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_direction",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
    ],
    name: "addTraSignal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addrPosNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addrTotValNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "alphaTradInfoFromAddress",
    outputs: [
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "takeProfit",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "direction",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "traSignalId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "postDate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "int256",
        name: "success",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "timesVal",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "changePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "traSignalId",
        type: "uint16",
      },
    ],
    name: "findTraSignalIndex",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getAccu",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "getActiveAlphaTra",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveAlphaTraLen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getAlphaScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "index",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getTraSignal",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "priceEntry",
            type: "string",
          },
          {
            internalType: "string",
            name: "stopLoss",
            type: "string",
          },
          {
            internalType: "string",
            name: "takeProfit",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "direction",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "traSignalId",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "postDate",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "alpha",
            type: "address",
          },
          {
            internalType: "string",
            name: "_msg",
            type: "string",
          },
          {
            internalType: "int256",
            name: "success",
            type: "int256",
          },
          {
            internalType: "uint8",
            name: "timesVal",
            type: "uint8",
          },
        ],
        internalType: "struct B.traSignal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "index",
        type: "uint16",
      },
    ],
    name: "getTraSignalGlob",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "priceEntry",
            type: "string",
          },
          {
            internalType: "string",
            name: "stopLoss",
            type: "string",
          },
          {
            internalType: "string",
            name: "takeProfit",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "direction",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "traSignalId",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "postDate",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "alpha",
            type: "address",
          },
          {
            internalType: "string",
            name: "_msg",
            type: "string",
          },
          {
            internalType: "int256",
            name: "success",
            type: "int256",
          },
          {
            internalType: "uint8",
            name: "timesVal",
            type: "uint8",
          },
        ],
        internalType: "struct B.traSignal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTradGlobLength",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastPostTra",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxLengthTrad",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodNum",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "seeAlphaTraScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeLastPostTra",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeValidatorScore1",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "setActualPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "traActiveAlphaProvsThisPeriod",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "traSignalAlphaLength",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "traSignalNum",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "traSignals",
    outputs: [
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "takeProfit",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "direction",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "traSignalId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "postDate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "int256",
        name: "success",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "timesVal",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "traSignalsGlob",
    outputs: [
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "takeProfit",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "direction",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "traSignalId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "postDate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "int256",
        name: "success",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "timesVal",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tradSigIdToValid",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "val",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userValid",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_traSignalId",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "posNeg",
        type: "uint8",
      },
    ],
    name: "validate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "validatorScore1",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const ABI3 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string",
      },
    ],
    name: "createCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string",
      },
    ],
    name: "regWithCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_points",
        type: "uint32",
      },
    ],
    name: "setPoinsAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_points",
        type: "uint32",
      },
    ],
    name: "setPoinsReferrer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressCode",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "AddressPuntuation",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "codeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string",
      },
    ],
    name: "codeListReview",
    outputs: [
      {
        internalType: "bool",
        name: "isInList",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "codeUsed",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "points",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pointsRef",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeIfHasReg",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeMyCode",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "timesUsedReferralCode",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
var web3Instance = new Web3(web3.currentProvider);

const conAddress = "0x6994eD4f085b000eC4e0cA4F58cFCb11f075e13a";
const conAddress2 = "0xc533936679A325622c42b9eF721a3E59Cf6B300c";
const conAddress3 = "0x59C901d203B1920E316f50d3847ED035D5c11Cfe";
const contract = new web3Instance.eth.Contract(ABI, conAddress);
const contract2 = new web3Instance.eth.Contract(ABI2, conAddress2);
const contract3 = new web3Instance.eth.Contract(ABI3, conAddress3);

//SEARCH ALPHA

var iNam = document.getElementById("input1"); 
var namBut = document.getElementById("searchBut");
var divAS = document.getElementById("alphaSearch");
var alphaName = document.getElementById("alphaName");
var monPri = document.getElementById("alphaMonPrice");
var annPri = document.getElementById("alphaAnnPrice");
var SearchAlphaAddress;
var zoneBut = document.getElementById("zoneBut");
var plans = document.getElementById("plans");
var beta = document.getElementById("beta");
var alpha = document.getElementById("alpha");
var myZone = document.getElementById("myZone");
var search = document.getElementById("search");
var input1 = document.getElementById("input1");
var lupa = document.getElementById("lupa");
var tools = document.getElementById("tools");
var alphaSignals = document.getElementById("alphaSignals");
var myAlphas = document.getElementById("myAlphas");
var out = document.getElementById("out");
var wt = document.getElementById("toolsWindow");
var tw = document.getElementById("toolsWindowText");
var tw1 = document.getElementById("windowTool1");
var tw2 = document.getElementById("windowTool2");
var tw3 = document.getElementById("windowTool3");
var tw4 = document.getElementById("windowTool4");
var tw0 = document.getElementById("toolsWindow");
var TraSig = document.getElementById("validate");
var butSign = document.getElementById("butSign");
var validator = document.getElementById("validator");
var numFollowingDiv = document.getElementById("numFollowingDiv");
var alphaNextPay = document.getElementById("alphaNextPay");
var alBaLauBut = document.getElementById("launchABbut");

var userZoneOn;

zoneBut.addEventListener("click", function () {
  plans.style.display = "none";
  beta.style.display = "none";
  alpha.style.display= "none";
  myZone.style.display = "none";
  myAlphas.style.display = "block";
  validate.style.display = "block";
  butSign.style.display = "block";
  alphaSignals.style.display = "block";
  search.style.marginTop = "15vh";
  search.style.marginLeft = "2vw";
  search.style.width = "2vw";
  search.style.height = "4vh";
  input1.style.display = "none";
  namBut.style.display = "none";
  lupa.style.display = "block";
  userEarn.style.display = "block";
  alphaSearch.style.display = "none";
  moreInfoSig.style.display = "block";
  alphaNextPay.style.display = "block";
  alBaLauBut.style.display = "block";
  myRefCode.style.display = "block";
  document.getElementById("myAlphaInfo").style.display = "block";
  userZoneOn = true;
  input1.value = "";
  document.getElementById("address2").style.display = "block";
  validator.style.display = "block";
  numFollowingDiv.style.display = "block";
  seeTraSig2();
  seeImfollowingAlphas();
});

lupa.addEventListener("click", function(){
  if (userZoneOn == true){
    search.style.marginTop = "15vh";
    search.style.marginLeft = "2vw";
    search.style.width = "28vw";
    search.style.height = "25vh";
    search.style.zIndex = "3";
    input1.style.display = "block";
    namBut.style.display = "block";
    lupa.style.display = "none";
    out.style.display = "block";
    userEarn.style.marginLeft = "33.5vw";
    userEarn.style.marginTop = "15vh";
    userEarn.style.width = "2vw";
    userEarn.style.height = "4vh";
    earnLogo.style.display = "block";
    out2.style.display = "none";
    divId2.style.display = "none";
    siDiv.style.display = "none";

  }
});

out.addEventListener("click", function () {
    search.style.width = "2vw";
    search.style.height = "4vh";
    search.style.zIndex = "2";
    input1.style.display = "none";
    namBut.style.display = "none";
    lupa.style.display = "block";
    alphaSearch.style.display = "none";
    out.style.display = "none";
    input1.value = "";
    userEarn.style.marginLeft = "2vw";
    userEarn.style.marginTop = "24vh";
  out2.style.display = "none";
  siDiv.style.display = "block";
});

var alphaPrices;

namBut.addEventListener("click", async () => {
  try {
    var _name = iNam.value;
    var _name2 = _name.toLowerCase();
    SearchAlphaAddress = await contract.methods.searchName(_name2).call();
    if (SearchAlphaAddress == "0x0000000000000000000000000000000000000000") {
      alphaName.innerText = "Not Found";
    } else {
      var name = iNam.value;
      alphaName.innerText = name.toUpperCase();
      alphaPrices = await contract.methods.seeAlphaPrices(SearchAlphaAddress).call();
      var monthlyPriceInETH = alphaPrices[0] / 1e18;
      var annualPriceInETH = alphaPrices[1] / 1e18;

      monPri.innerText = `${monthlyPriceInETH} ETH`;
      annPri.innerText = `${annualPriceInETH} ETH`;
      document.getElementById("signals").innerText = await contract2.methods
        .traSignalAlphaLength(SearchAlphaAddress)
        .call(); //+++++
    }
    iNam.style.marginTop = "2vh";
    namBut.style.marginTop = "2vh";
    divAS.style.display = "block"
    document.getElementById("followers").innerText = await contract.methods.seeAlphaFollowersLen(SearchAlphaAddress).call();
    seeAlphasImFollowing();
  } catch (error) {
    console.log("error searching name" + error);
  }
});

monPri.addEventListener("click", async()=>{
  try{
    await contract.methods
      .payAlpha(SearchAlphaAddress, 1)
      .send({ from: connectedAddress, value: alphaPrices[0], });
      seeAlphasImFollowing();
      seeImfollowingAlphas();
  } catch(error){console.log(error);}
})

annPri.addEventListener("click", async () => {
  try {
    await contract.methods
      .payAlpha(SearchAlphaAddress, 2)
      .send({ from: connectedAddress, value: alphaPrices[1] });
      seeAlphasImFollowing();
      seeImfollowingAlphas();
  } catch (error) {
    console.log(error);
  }
});

var moreInfoSig = document.getElementById("moreInfoSig");

var sigId = document.getElementById("sigId");
var idSignal;

async function seeTraSig2(alphaAddress) {
  var tradingSigList = document.getElementById("tradingSigList");
  var numSignals = await contract2.methods
    .traSignalAlphaLength(alphaAddress)
    .call();

  if (numSignals < 50) {
    tradingSigList.innerText = "";
    for (let i = numSignals - 1; i >= 0; i--) {
      var traSignal = await contract.methods
        .seeTraSig2(i, alphaAddress, connectedAddress)
        .call();

      var signalDiv = document.createElement("div");
      signalDiv.classList.add("signalTrad");
      var dataValorList = [
        traSignal[0], //asset
        traSignal[1], //entry
        traSignal[2], //sl
        traSignal[3], //tp1
        traSignal[4], //dir
        traSignal[5], //id
        await contract.methods.seeName(traSignal[7]).call(), //alphaName
        traSignal[8], //msg
      ];
      signalDiv.setAttribute("data-valor", JSON.stringify(dataValorList));
      
      function addClickHandler(div, data) {
        div.addEventListener("click", function () {
          var dataValor = JSON.parse(data);
          idSignal = dataValor[5];
          var tp1 = dataValor[3];
          var asset = dataValor[0];
          var entry = dataValor[1];
          var sl = dataValor[2];
          var alphaName = dataValor[6];
          var potProfit = ((tp1 - entry) / entry)*100;  
          var msg = dataValor[7];
          potProfit = Math.abs(potProfit);
          potProfit = potProfit.toFixed(2);
          document.getElementById("mrinfNam").style.display = "block";
          var percentageThreshold = 1;
          if (entry * (1 + percentageThreshold / 100) > tp1) {
            // The trade is considered "Short"
            var potLoss = ((entry - sl) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Short";
            document.getElementById("imgLongmi").style.display = "none";
            document.getElementById("imgShortmi").style.display = "block";
          } else {
            // The trade is considered "Long"
            potLoss = ((sl - entry) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Long";
            document.getElementById("imgLongmi").style.display = "block";
            document.getElementById("imgShortmi").style.display = "none";
          }
          potLoss = potLoss.toFixed(2);
          sigId.innerText = "id." + idSignal;
          document.getElementById("takeProfitsDiv4").innerText = "$" + tp1;
          document.getElementById("takeProfitsDiv6").innerText = potProfit + "%";
          document.getElementById("stopLossDiv4").innerText = "$" + sl;
          document.getElementById("stopLossDiv6").innerText = potLoss + "%";
          document.getElementById("mrinfAss").innerHTML= asset;
          document.getElementById("entrymit2").innerHTML = "$" + entry;
          document.getElementById("alphaMsg").innerText = msg;
          if (asset == "BTC" || asset == "btc") {
            var btcImg = document.createElement("img");
            btcImg.src = "btc.png";
            btcImg.classList.add("assetImg2");
            moreInfoSig.appendChild(btcImg);
          } else if (asset == "ETH" || asset == "eth") {
            var ethImg = document.createElement("img");
            ethImg.src = "eth.png";
            ethImg.classList.add("assetImg2");
            moreInfoSig.appendChild(ethImg);
          } else {
            var elseImg = document.createElement("img");
            elseImg.src =
              "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y67D157542882W24948H18711/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/signo-de-interrogacion-planeado-hae-simbolo-signo-regalo-bolsa-de-tela.jpg";
            elseImg.classList.add("assetImg2");
            moreInfoSig.appendChild(elseImg);
            elseImg.style.borderRadius = "2vw";
          }
          
        });
      }

      addClickHandler(signalDiv, signalDiv.getAttribute("data-valor"));
      
      var assetP = document.createElement("p");
      assetP.innerText = `${traSignal[0]}`;
      assetP.classList.add("assetS");

      if (`${traSignal[0]}` == "BTC" || `${traSignal[0]}` == "btc") {
        var btcImg = document.createElement("img");
        btcImg.src = "btc.png";
        btcImg.classList.add("assetImg");
        signalDiv.appendChild(btcImg);
      } else if (`${traSignal[0]}` == "ETH" || `${traSignal[0]}` == "eth") {
        var ethImg = document.createElement("img");
        ethImg.src = "eth.png";
        ethImg.classList.add("assetImg");
        signalDiv.appendChild(ethImg);
      } else {
        var elseImg = document.createElement("img");
        elseImg.src =
          "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y67D157542882W24948H18711/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/signo-de-interrogacion-planeado-hae-simbolo-signo-regalo-bolsa-de-tela.jpg";
        elseImg.classList.add("assetImg");
        signalDiv.appendChild(elseImg);
        elseImg.style.borderRadius = "2vw";
      }

      var entryP = document.createElement("p");
      entryP.innerText = `$ ${traSignal[1]}`;
      entryP.classList.add("entryS");
      var slP = document.createElement("p");
      slP.innerText = `$ ${traSignal[2]}`;
      if (traSignal[4] == 1) {
        slP.classList.add("slSlong");
      } else {
        slP.classList.add("slSshort");
      }
      var tpP = document.createElement("p");
      tpP.innerText = `$ ${traSignal[3]}`;
      if (traSignal[4] == 1) {
        tpP.classList.add("tpSlong");
      } else {
        tpP.classList.add("tpSshort");
      }
      var dirP = document.createElement("p");
      var LoS = "";
      if (traSignal[4] == 1) {
        LoS = "Long";
        var longImg = document.createElement("div");
        longImg.classList.add("longImg");
        signalDiv.appendChild(longImg);
      } else {
        LoS = "Short";
        var shortImg = document.createElement("div");
        shortImg.classList.add("shortImg");
        signalDiv.appendChild(shortImg);
      }
      dirP.innerText = `${LoS}`;
      dirP.classList.add("dirS");
      /*
      var msgTextMsg = document.createElement("p");
      msgTextMsg.innerText = "Signal Message";
      msgTextMsg.classList.add("msgTextmsg");
      signalDiv.appendChild(msgTextMsg);
      */
      var date = document.createElement("p");
      date.classList.add("date");
      var postBlock = `${traSignal[6]}`;
      var transDate = new Date(postBlock * 1000);
      var y = transDate.getFullYear();
      var m = transDate.getMonth() + 1;
      var d = transDate.getDate();
      var h = transDate.getHours();
      var mi = transDate.getMinutes();
      if (mi >= 10) {
        var postDate = `${y}/${m}/${d}  ${h}:${mi}`;
      } else {
        var postDate = `${y}/${m}/${d}  ${h}:0${mi}`;
      }
      date.innerHTML = postDate;

      if (traSignal[4] == 1) {
        var dolp1 = document.createElement("p");
        dolp1.classList.add("dolp1");
        dolp1.innerText = "Take Profit";
        var dolp2 = document.createElement("p");
        dolp2.classList.add("dolp2");
        dolp2.innerText = "Entry";
        var dolp3 = document.createElement("p");
        dolp3.classList.add("dolp3");
        dolp3.innerText = "Stop Loss";
      } else {
        var dolp1 = document.createElement("p");
        dolp1.classList.add("dolp3");
        dolp1.innerText = "Take Profit";
        var dolp2 = document.createElement("p");
        dolp2.classList.add("dolp2");
        dolp2.innerText = "Entry";
        var dolp3 = document.createElement("p");
        dolp3.classList.add("dolp1");
        dolp3.innerText = "Stop Loss";
      }
      /*
      if(traSignal[8] != undefined){
        var msgSig = document.createElement("p");
        msgSig.innerText = `${traSignal[8]}`;
        msgSig.classList.add("msgSig");
        signalDiv.appendChild(msgSig);
    }*/

      signalDiv.appendChild(dolp1);
      signalDiv.appendChild(dolp2);
      signalDiv.appendChild(dolp3);
      signalDiv.appendChild(entryP);
      signalDiv.appendChild(assetP);
      signalDiv.appendChild(slP);
      signalDiv.appendChild(tpP);
      signalDiv.appendChild(dirP);
      signalDiv.appendChild(date);
      tradingSigList.appendChild(signalDiv);
    }
  } else {
    for (let i = numSignals - 1; i >= numSignals - 50; i--) {
      // solo salen las 50 primeras señales de trading
      await contract.methods
        .seeTraSig2(i, alphaAddress, connectedAddress)
        .call();

      var signalDiv = document.createElement("div");
      signalDiv.classList.add("signalTrad");
      var dataValorList = [
        traSignal[0], //asset
        traSignal[1], //entry
        traSignal[2], //sl
        traSignal[3], //tp1
        traSignal[4], //dir
        traSignal[5], //id
        await contract.methods.seeName(traSignal[7]).call(), //alphaName
        traSignal[8], //msg
      ];
      signalDiv.setAttribute("data-valor", JSON.stringify(dataValorList));

      function addClickHandler(div, data) {
        div.addEventListener("click", function () {
          var dataValor = JSON.parse(data);
          idSignal = dataValor[5];
          var tp1 = dataValor[3];
          var asset = dataValor[0];
          var entry = dataValor[1];
          var sl = dataValor[2];
          var alphaName = dataValor[6];
          var potProfit = ((tp1 - entry) / entry) * 100;
          var msg = dataValor[7];
          potProfit = Math.abs(potProfit);
          potProfit = potProfit.toFixed(2);
          document.getElementById("mrinfNam").style.display = "block";
          var percentageThreshold = 1;
          if (entry * (1 + percentageThreshold / 100) > tp1) {
            // The trade is considered "Short"
            var potLoss = ((entry - sl) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Short";
            document.getElementById("imgLongmi").style.display = "none";
            document.getElementById("imgShortmi").style.display = "block";
          } else {
            // The trade is considered "Long"
            potLoss = ((sl - entry) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Long";
            document.getElementById("imgLongmi").style.display = "block";
            document.getElementById("imgShortmi").style.display = "none";
          }
          potLoss = potLoss.toFixed(2);
          sigId.innerText = "id." + idSignal;
          document.getElementById("takeProfitsDiv4").innerText = "$" + tp1;
          document.getElementById("takeProfitsDiv6").innerText =
            potProfit + "%";
          document.getElementById("stopLossDiv4").innerText = "$" + sl;
          document.getElementById("stopLossDiv6").innerText = potLoss + "%";
          document.getElementById("mrinfAss").innerHTML = asset;
          document.getElementById("entrymit2").innerHTML = "$" + entry;
          document.getElementById("alphaMsg").innerText = msg;
          if (asset == "BTC" || asset == "btc") {
            var btcImg = document.createElement("img");
            btcImg.src = "btc.png";
            btcImg.classList.add("assetImg2");
            moreInfoSig.appendChild(btcImg);
          } else if (asset == "ETH" || asset == "eth") {
            var ethImg = document.createElement("img");
            ethImg.src = "eth.png";
            ethImg.classList.add("assetImg2");
            moreInfoSig.appendChild(ethImg);
          } else {
            var elseImg = document.createElement("img");
            elseImg.src =
              "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y67D157542882W24948H18711/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/signo-de-interrogacion-planeado-hae-simbolo-signo-regalo-bolsa-de-tela.jpg";
            elseImg.classList.add("assetImg2");
            moreInfoSig.appendChild(elseImg);
            elseImg.style.borderRadius = "2vw";
          }
        });
      }

      addClickHandler(signalDiv, signalDiv.getAttribute("data-valor"));


      var assetP = document.createElement("p");
      assetP.innerText = `${traSignal[0]}`;
      assetP.classList.add("assetS");

      if (`${traSignal[0]}` == "BTC" || `${traSignal[0]}` == "btc") {
        var btcImg = document.createElement("img");
        btcImg.src = "btc.png";
        btcImg.classList.add("assetImg");
        signalDiv.appendChild(btcImg);
      } else if (`${traSignal[0]}` == "ETH" || `${traSignal[0]}` == "eth") {
        var ethImg = document.createElement("img");
        ethImg.src = "eth.png";
        ethImg.classList.add("assetImg");
        signalDiv.appendChild(ethImg);
      } else {
        var elseImg = document.createElement("img");
        elseImg.src =
          "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y67D157542882W24948H18711/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/signo-de-interrogacion-planeado-hae-simbolo-signo-regalo-bolsa-de-tela.jpg";
        elseImg.classList.add("assetImg");
        signalDiv.appendChild(elseImg);
        elseImg.style.borderRadius = "2vw";
      }

      var entryP = document.createElement("p");
      entryP.innerText = `$ ${traSignal[1]}`;
      entryP.classList.add("entryS");
      var slP = document.createElement("p");
      slP.innerText = `$ ${traSignal[2]}`;
      if (traSignal[4] == 1) {
        slP.classList.add("slSlong");
      } else {
        slP.classList.add("slSshort");
      }
      var tpP = document.createElement("p");
      tpP.innerText = `$ ${traSignal[3]}`;
      if (traSignal[4] == 1) {
        tpP.classList.add("tpSlong");
      } else {
        tpP.classList.add("tpSshort");
      }
      var dirP = document.createElement("p");
      var LoS = "";
      if (traSignal[4] == 1) {
        LoS = "Long";
        var longImg = document.createElement("div");
        longImg.classList.add("longImg");
        signalDiv.appendChild(longImg);
      } else {
        LoS = "Short";
        var shortImg = document.createElement("div");
        shortImg.classList.add("shortImg");
        signalDiv.appendChild(shortImg);
      }
      dirP.innerText = `${LoS}`;
      dirP.classList.add("dirS");

      var date = document.createElement("p");
      date.classList.add("date");
      var postBlock = `${traSignal[6]}`;
      var transDate = new Date(postBlock * 1000);
      var y = transDate.getFullYear();
      var m = transDate.getMonth() + 1;
      var d = transDate.getDate();
      var h = transDate.getHours();
      var mi = transDate.getMinutes();
      if(mi >= 10){
        var postDate = `${y}/${m}/${d}  ${h}:${mi}`;
      } else{var postDate = `${y}/${m}/${d}  ${h}:0${mi}`;}
      date.innerHTML = postDate;
      var dolp1 = document.createElement("p");
      dolp1.classList.add("dolp1");
      dolp1.innerText = "Take Profit";
      var dolp2 = document.createElement("p");
      dolp2.classList.add("dolp2");
      dolp2.innerText = "Entry";
      var dolp3 = document.createElement("p");
      dolp3.classList.add("dolp3");
      dolp3.innerText = "Stop Loss";

      signalDiv.appendChild(dolp1);
      signalDiv.appendChild(dolp2);
      signalDiv.appendChild(dolp3);
      signalDiv.appendChild(entryP);
      signalDiv.appendChild(assetP);
      signalDiv.appendChild(slP);
      signalDiv.appendChild(tpP);
      signalDiv.appendChild(dirP);
      signalDiv.appendChild(date);
      tradingSigList.appendChild(signalDiv);
    }
  }
}

async function seeAlphasImFollowing() {
  try{
    var elementsToDelete2 = document.querySelectorAll(".myAlphaName");
    elementsToDelete2.forEach(function (element) {
      element.parentElement.removeChild(element);
    });
    var myAlphasListLen = await contract.methods.seeImFollowingListLen(connectedAddress).call();
    for(var i = myAlphasListLen-1; i >= 0; i--){
      var alphaAddressI = await contract.methods.seeAlphasFollowing(connectedAddress, i).call();
      var alphaNameIObj = await contract.methods.seeName(alphaAddressI).call();
      var alphaNameI = alphaNameIObj.toString(); // Convertir el objeto a cadena
      var alphaP = document.createElement("p");
      alphaP.innerText = alphaNameI;
      alphaP.classList.add("myAlphaName");
      myAlphas.appendChild(alphaP);
      alphaP.setAttribute("data-valor", `${alphaAddressI}`);

      (function (alpha) {
        alpha.addEventListener("click", function () {
          console.log(alpha.getAttribute("data-valor"));
          var alphaClick = alpha.getAttribute("data-valor");
          seeTraSig2(alphaClick);
          seeAlphaInfo(alphaClick);
          seeNextTimePayThisAlphaJS(alphaClick);
        });
      })(alphaP);
    }

    
  } catch(error){console.log("error" + error)}
}

var valPoints = document.getElementById("valPoints");

async function getValidatorPoints() {
  try{
    var validatorScore = await contract.methods.seeTotalValidatorScore(connectedAddress).call();
    valPoints.innerText = `${validatorScore}`;
  } catch(error){}
}

var userEarn = document.getElementById("userEarn");
var earnLogo = document.getElementById("earnLogo");
var out2 = document.getElementById("out2");
var divId2 = document.getElementById("divId2");

earnLogo.addEventListener("click", function(){
  userEarn.style.marginTop = "15vh";
  userEarn.style.marginLeft = "2vw";
  userEarn.style.width = "28vw";
  userEarn.style.height = "25vh";
  userEarn.style.zIndex = "3";
  input1.style.display = "block";
  namBut.style.display = "block";
  earnLogo.style.display = "none";
  out2.style.display = "block";
  input1.style.display = "none";
  namBut.style.display = "none";
  search.style.marginLeft = "33.5vw";
  search.style.width = "2vw";
  search.style.height = "4vh";
  search.style.zIndex = "2";
  input1.style.display = "none";
  namBut.style.display = "none";
  lupa.style.display = "block";
  alphaSearch.style.display = "none";
  out.style.display = "none";
  input1.value = "";
  divId2.style.display = "block";
  siDiv.style.display = "none";
});

var siDiv = document.getElementById("siDiv");

out2.addEventListener("click", function () {
  userEarn.style.width = "2vw";
  userEarn.style.height = "4vh";
  userEarn.style.marginTop = "24vh";
  userEarn.style.zIndex = "2";
  earnLogo.style.display = "block";
  out2.style.display = "none";
  search.style.marginLeft = "2vw";
  divId2.style.display = "none";
  siDiv.style.display = "block";
});

var succBut = document.getElementById("succ");
var failBut = document.getElementById("fail");

succBut.addEventListener("click", async () => {
  try {
    console.log("clicked succ");
    await contract2.methods.validate(idSignal, 0).send({from: connectedAddress});
    getValidatorPoints();
  } catch (error) {
    console.log(error);
  }
});

failBut.addEventListener("click", async () => {
  try {
    console.log("clicked fail");
    await contract2.methods
      .validate(idSignal, 0)
      .send({ from: connectedAddress });
      getValidatorPoints();
  } catch (error) {
    console.log(error);
  }
});


var myRefCode = document.getElementById("myReferCode");

myRefCode.addEventListener("mouseover", function () {
  userEarn.style.backgroundColor = "#a1a1a1";
});

myRefCode.addEventListener("mouseout", function () {
  userEarn.style.backgroundColor = "#111111";
});

var refCodeUsed = document.getElementById("refCodeIn");
var applyCode = document.getElementById("apply");

var referrerAddress;

applyCode.addEventListener("click", async() => {
  try{
    var reg = await contract3.methods.seeIfHasReg(connectedAddress).call();
    if (reg != 0x0000000000000000000000000000000000000000) {
      referrerAddress = await contract3.methods
        .seeIfHasReg(connectedAddress)
        .call();
      var disPrices = await contract.methods.seeDiscPrices().call();
      document.getElementById("simpleMonPrice").innerHTML = disPrices[0];
      document.getElementById("simpleAnnPrice").innerHTML = disPrices[1];
    } else {
      await contract3.methods
        .regWithCode(refCodeUsed.value)
        .send({ from: connectedAddress, gasPrice: "481878" });
      referrerAddress = await contract3.methods
        .seeIfHasReg(connectedAddress)
        .call();
      var disPrices = await contract.methods.seeDiscPrices().call();
      document.getElementById("simpleMonPrice").innerHTML = disPrices[0];
      document.getElementById("simpleAnnPrice").innerHTML = disPrices[1];
    }
  } catch(error){console.log(error);}
});

var refCreate = document.getElementById("refCodeCreate");
var createBut = document.getElementById("create");
var mrc = document.getElementById("mrc");

createBut.addEventListener("click", async () => {
  try {
    await contract3.methods.createCode(refCreate.value).send({ from: connectedAddress });
    mrc.innerHTML = await contract3.methods.seeMyCode(connectedAddress).call();
  } catch (error) {
    console.log(error);
  }
});

var copyRef = document.getElementById("butCopyRefLink");
var refLink;

copyRef.addEventListener("click", async() => {
  try {
    var myRefCode = await contract3.methods.seeMyCode(connectedAddress).call();
    refLink =
      "https://alphabase-test.github.io/AlphaScoutZone/AlphaScout.html?refCode=" +
      myRefCode.toString();
    copyToClipboard(refLink);
    alert("Enlace de referencia copiado al portapapeles: " + refLink);

  } catch(error){console.error(error);}
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtén el código de referencia de la URL al cargar la página
  const urlParams = new URLSearchParams(window.location.search);
  const refCodeFromURL = urlParams.get('refCode');
  refCodeUsed.value = refCodeFromURL;
});

async function seeAlphaInfo(alpha) {
  try{
    document.getElementById("seeTotalSig").innerText = await contract2.methods.traSignalAlphaLength(alpha).call(); //+++++++
    document.getElementById("seeTraSig").innerText = await contract2.methods.traSignalAlphaLength(alpha).call();
    //document.getElementById("seeOncSig").innerText = await contract4.methods.traSignalAlphaLength(alpha).call();
    document.getElementById("alScore").innerText = await contract.methods.seeTotalAlphaScore(alpha).call();
    var totalAccuracy = await contract2.methods.getAccu(alpha).call(); // + if(>0){contract4...}
    document.getElementById("alAccur").innerText = totalAccuracy;
  } catch(error){console.error(error);}
}
/*
async function seeLastPay() {
  try{
    document.getElementById("npta").innerText = await contract.seeLastPay;
  } catch (error){
    console.error(error);
  }
} 
*/

var lupa2 = document.getElementById("lupa2");

lupa2.addEventListener("mouseover", function(){
  search.style.borderColor = "#a1a1a1";
  search.style.borderStyle = "solid";
});

lupa2.addEventListener("mouseout", function () {
  search.style.borderStyle = "none";
});

var earnLogo2 = document.getElementById("earnLogo2");
var userEarn = document.getElementById("userEarn");

earnLogo2.addEventListener("mouseover", function () {
  userEarn.style.borderColor = "#a1a1a1";
  userEarn.style.borderStyle = "solid";
});

earnLogo2.addEventListener("mouseout", function () {
  userEarn.style.borderStyle = "none";
});

var followImg = document.getElementById("followImg");

followImg.addEventListener("mouseover", function () {
  myAlphas.style.borderColor = "#a1a1a1";
  myAlphas.style.borderStyle = "solid";
});

followImg.addEventListener("mouseout", function () {
  myAlphas.style.borderStyle = "none";
});

var numFollowing = document.getElementById("numFollowing");

async function seeImfollowingAlphas() {
  try{
    numFollowing.innerText = await contract.methods.seeImFollowingListLen(connectedAddress).call();
  } catch(error){console.error(error);}
}

var butBuyMon = document.getElementById("buy");
var butBuyAnn = document.getElementById("buyB");

butBuyMon.addEventListener("click", async() =>{
  try {
    if (
      referrerAddress !== undefined 
    ){
      var DiscPrices = await contract.methods.seeDiscPrices().call();
      await contract.methods.payFullMonthRefDiscount(referrerAddress).send({ from: connectedAddress, value: DiscPrices[0] });
    } else {
      var Prices = await contract.methods.seePrices().call({from: connectedAddress});
      await contract.methods
        .payFullMonth()
        .send({ from: connectedAddress, value: Prices[0] });
    }
  } catch(error){console.error(error);}
})

butBuyAnn.addEventListener("click", async () => {
  try {
    console.log("Referrer Address: ", referrerAddress);
    if (
      referrerAddress !== undefined
    ) {
      var DiscPrices = await contract.methods.seeDiscPrices().call();
      await contract.methods
        .payFullAnnualRefDiscount(referrerAddress)
        .send({ from: connectedAddress, value: DiscPrices[1] });
    } else {
      console.log("enter in else . . .")
      var Prices = await contract.methods.seePrices().call({from: connectedAddress});
      await contract.methods
        .payFullAnnual()
        .send({ from: connectedAddress, value: Prices[1] });
    }
  } catch (error) {
    console.error(error);
  }
});

async function seePricesJs() {
  try {
    var prices = await contract.methods
      .seePrices()
      .call({ from: connectedAddress });

    var simpleMonPriceInEth = prices[0] / 1e18;
    var simpleAnnPriceInEth = prices[1] / 1e18;

    document.getElementById("simpleMonPrice").innerText =
      simpleMonPriceInEth;
    document.getElementById("simpleAnnPrice").innerText =
      simpleAnnPriceInEth;
  } catch (error) {
    console.error(error);
  }
}

async function seeNextTimePayThisAlphaJS(alphaAddress) {
  try {
    
    const timestamp = await contract.methods
      .seeNextTimePayThisAlpha(alphaAddress, connectedAddress)
      .call();

    const date = new Date(timestamp * 1000); 

    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById("npta").innerHTML = formattedDate;
  } catch (error) {
    console.error(error);
  }
}
