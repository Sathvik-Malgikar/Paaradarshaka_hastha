
App ={
    loading:false,
    contracts:{},
    load:async () =>{
        await App.loadWeb3()
        await App.loadAccount()
        await App.loadContract()
        await App.render()
    },
    loadWeb3: async () => {
        if (typeof web3 !== 'undefined') {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(web3.currentProvider)
        } else {
          window.alert("Please connect to Metamask.")
        }
        
        if (window.ethereum) {
          window.web3 = new Web3(ethereum)
          try {
            
            await ethereum.enable()
            //console.log("ETher")
            //window.ethereum.enable()
            
            //web3.eth.sendTransaction({/* ... */})
            //web3.eth.sendTransaction
          } catch (error) {
            
          }
        }
        
        else if (window.web3) {
          App.web3Provider = web3.currentProvider
          window.web3 = new Web3(web3.currentProvider)
          
          web3.eth.sendTransaction({/* ... */})
        }
        
        else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      },
    
      loadAccount: async () => {
        
        App.account = web3.eth.accounts[0]
        web3.eth.defaultAccount = web3.eth.coinbase
        
        //web3.personal.unlockAccount(App.account)
        //console.log(App.account)
      },
    
      loadContract: async () => {
        
        const donationList = await $.getJSON('Donations.json')
        //console.log(donationList)
        App.contracts.DonationList = TruffleContract(donationList)
        App.contracts.DonationList.setProvider(App.web3Provider)
    
        
        App.donationList = await App.contracts.DonationList.deployed()
      },
    
      render: async () => {
        
        if (App.loading) {
          return
        }
    
        
        App.setLoading(true)
    
        
        $('#address').html("Account Address "+App.account)
    
        
        //await App.renderDonations()
    
        
        App.setLoading(false)
      },
    
      renderDonations: async () => {
        
        const donationCount = await App.donationList.donationCount()
        //const $donationTemplate = $('.donationTemplate')
    
        
        for (var i = 1; i <= donationCount; i++) {
          
          const donation = await App.donationList.donations(i)
          const donationId = donation[0].toNumber()
          const donationContent = donation[1]
          const donationCompleted = donation[2]
    
         
          //const $newTaskTemplate = $donationTemplate.clone()
          //$newTaskTemplate.find('.content').html(donationContent)
          //$newTaskTemplate.find('input')
                        //   .prop('name', donationId)
                        //   .prop('checked', donationCompleted)
                        //   .on('click', App.toggleCompleted)
    
          
        //   if (donationCompleted) {
        //     $('#completedTaskList').append($newTaskTemplate)
        //   } else {
        //     $('#donationList').append($newTaskTemplate)
        //   }
    
          
          //$newTaskTemplate.show()
        }
      },
    
      makeDonation: async () => {
        App.setLoading(true)
        const amt=5;
        //const content = $('#newTask').val()
        const toPayAmt=$("#mbox").val()
        const commentStr=$("#dbox").val()
        await App.donationList.makeDonation(toPayAmt,commentStr)
        web3.eth.getAccounts(function(error,result){
            web3.eth.sendTransaction({from:web3.eth.defaultAccount,
            to:"0x0B683aF1EF8AB5F8A8A3229CC98fC21Ad58e5A23",
            value:web3.toWei(toPayAmt,"ether")
        },function(err,transactionHash,receipt,confirmation){
            if(!err){
                console.log(transactionHash+" Successful")
                console.log("Receipt "+receipt)
                console.log("Confirmation "+confirmation)
            }
        })
        })
        
        //window.location.reload()
      },
    
      toggleCompleted: async (e) => {
        App.setLoading(true)
        const donationId = e.target.name
        await App.donationList.toggleCompleted(donationId)
        window.location.reload()
      },
    
      setLoading: (boolean) => {
        App.loading = boolean
        // const loader = $('#loader')
        // const content = $('#content')
        // if (boolean) {
        //   loader.show()
        //   content.hide()
        // } else {
        //   loader.hide()
        //   content.show()
        // }
      }
}
$(() => {
    $(window).load(()=>{
        App.load()
    })
})