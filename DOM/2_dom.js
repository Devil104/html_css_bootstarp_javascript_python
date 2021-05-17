var one =document.querySelector('#first')
var two =document.querySelector("#Second")
var three =document.querySelector("#third")

one.addEventListener('mouseover',function(){
  one.textContent="Angcon";
  one.style.color="red"
})

one.addEventListener("mouseout",function(){
  one.textContent="Apurbo";
  one.style.color="black"
})

two.addEventListener('click',function(){
  two.textContent="Rajib";
  two.style.color="Blue"
})

three.addEventListener('dblclick',function(){
  three.textContent="kabil";
  three.style.color="green";
})
