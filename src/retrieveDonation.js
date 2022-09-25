
async function loadweb3() {
  if (typeof web3 !== "undefined") {
    web3Provider = web3.currentProvider;
    web3 = new Web3(web3.currentProvider);
  } else {
    window.alert("Please connect to Metamask.");
  }
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    web3Provider = web3.currentProvider;
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({
      /* ... */
    });
  }
  // Non-dapp browsers...
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
}

async function loadAccount() {
  account = web3.eth.accounts[0]
  web3.eth.defaultAccount = web3.eth.coinbase
  console.log(account);
}

load = async () => {
  await loadweb3();
  await loadAccount();
  await loadContract();
};
if (window.load()) {
  load();
}

async function loadContract() {
  contractjson = await $.getJSON("Donations.json");
  Contractjson =await TruffleContract(contractjson);
  Contractjson.setProvider(web3Provider);
const deploye = await Contractjson.deployed();
dc = await deploye.donationCount()
console.log(dc.toNumber())
}

match  = async (inputid) => {
  const deploye = await Contractjson.deployed();
  dc = await deploye.donationCount()
  for ( i=0;i<=await dc.toNumber();i++)
  {
    val1 = await deploye.donations(i);
    id =await val1[0].toNumber();


  if(id == parseInt( inputid)){
    $("#header").append("<br>Transaction was successful!")
    // console.log(await deploye.spendDonation)
   await deploye.spendDonation( parseInt(inputid));
  // deploye.makeDonation("2","test")
    break;
  }else{
    idfield.value = "Not found!"}
  }
}
btn = document.getElementById("retrieve")
idfield = document.getElementById("idfield")
btn.onclick=()=>{
  inputid = idfield.value
  match (inputid)
}