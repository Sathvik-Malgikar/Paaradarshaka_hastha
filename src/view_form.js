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
    account = web3.eth.accounts[0];
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
    Contractjson = TruffleContract(contractjson);
    Contractjson.setProvider(web3Provider);
    deploye = await Contractjson.deployed();
    dc = await deploye.donationCount()
  
    
  }
  
  async function getinfo (inputid){
    for ( i=0;i<=await dc.toNumber();i++)
    {
      val1 = await deploye.donations(i);
      id =await val1[0].toNumber();
  
  
    if(id == parseInt( inputid)){

  
//   struct Donation{
//     uint id;
//     uint amt;
//     string comment;
//     bool completed;
//     bool spent;
// }



  texttobeappended ="amount : "+ val1[1].toNumber() +"<br/> comment : "+ val1[2] +"<br/>spent : "+ val1[4]
        $("#newspan").html(texttobeappended)
break;
    }else{
      idfield.value = ""}
    }
  }
  btn = document.getElementById("button")
  idfield = document.getElementById("input")
  btn.onclick=()=>{
    inputid = idfield.value
    getinfo (inputid)
  }