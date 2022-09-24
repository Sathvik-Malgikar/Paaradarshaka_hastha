
mbox = document.getElementById("mbox")

function changeMoney(event) {
if(event.deltaY>=0){

    //console.log("red")
    mbox.value =  (parseInt( mbox.value )-1);
    if(parseInt(mbox.value)<0){
      mbox.value="0";
    }
    else if(parseInt(mbox.value)>100){
      mbox.value="100"
    }
}else{
    //console.log("incr")
  mbox.value =  (parseInt( mbox.value )+1 );
  if(parseInt(mbox.value)<0){
    mbox.value="0";
  }
  else if(parseInt(mbox.value)>100){
    mbox.value="100"
  }

}
}