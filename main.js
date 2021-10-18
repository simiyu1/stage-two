

var Alert = new CustomAlert();
function CustomAlert(){
    
    this.render = function(mytext){
      let popUpBox = document.getElementById('popUpBox');
      popUpBox.style.display = "block";
      let popUpText = document.getElementById('modal_text');
      popUpText.innerText = mytext;
    
  }

this.accept = function(){
    let popUpResult = document.getElementById('modal_result');
    popUpResult.innerText = 'You just clicked "Yes"';
    document.getElementById('popUpBox').style.display = "none";
    document.getElementById('popUpOverlay').style.display = "none";
}
this.cancel = function(){
    let popUpResult = document.getElementById('modal_result');
    popUpResult.innerText = 'You just clicked "No"';
    document.getElementById('popUpBox').style.display = "none";
    document.getElementById('popUpOverlay').style.display = "none";
}
}