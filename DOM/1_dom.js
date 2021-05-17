var p=document.querySelector("h1")
p.style.color= "blue";

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
  p.style.color =d

}
setInterval("random1()",500);
