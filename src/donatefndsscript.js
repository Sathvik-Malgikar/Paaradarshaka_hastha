
mbox = document.getElementById("mbox")

function changeMoney(event) {
if(event.deltaY>=0){
    console.log("red")
    mbox.value =  (parseInt( mbox.value )-1) + " ETH";
}else{
    console.log("incr")
  mbox.value =  (parseInt( mbox.value )+1 ) +" ETH";

}
}