
mbox = document.getElementById("mbox")

function changeMoney(event) {
if(event.deltaY>=0){
    mbox.value =  (parseInt( mbox.value )-1) + " ETH";
}else{
  mbox.value =  (parseInt( mbox.value )+1 ) +" ETH";

}
}