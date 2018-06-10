setInterval(function(){
document.getElementById("homemain").className= "homemain1";
document.getElementById("change").innerHTML= "Your Child's Future Starts here";
document.getElementById("addbt").style.display= "none";
document.getElementById("change").style.opacity= ".8";

},10000);
function gh(a){
  if(a==1){
    window.location.assign("about.html");
  }
  else if(a==2){
    window.location.assign("admission.html");
  }
}
