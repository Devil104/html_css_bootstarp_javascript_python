var p=prompt("Enter Player1 name:")
var r=prompt("Enter Player2 name:")
alert("Are You Ready!")



var restart=document.querySelector("#one")


var tabb=document.querySelectorAll('td')

function res() {
  for (var i = 0; i < tabb.length; i++) {
    tabb[i].textContent='';
  }
  alert("Game Is Over " +p+ " and " +r)
  alert("Thanks For Play This Game")

}
restart.addEventListener('click',res);


function three(){
  if (this.textContent==="") {
    this.textContent='X'
    this.style.color="green"

}else {
  this.textContent="";

  }
}
for (var i = 0; i < tabb.length; i++) {
  tabb[i].addEventListener('click',three)

}


function four(){
  if (this.textContent==="") {
    this.textContent='0'
    this.style.color='red'

}else {
  this.textContent="";

  }
}
for (var y = 0; y < tabb.length; y++) {
  tabb[y].addEventListener('dblclick',four)


}

var q=document.querySelector("h1")


function randocolor() {
  color="1234567890ABCDEF"
  cod="#"
  for(i=0;i<6;i++){
    cod += color[Math.floor(Math.random()*16)]
  }
  return cod;

}
function random1() {
  var d=randocolor()
  q.style.color =d

}
setInterval("random1()",500);
