var arr=[];



function add(){
  var c=prompt("enter the name to add")
  arr.push(c)

}
function remove(){
  var d=prompt("enter the name to remove")
  var e=arr.indexOf(d);
  arr.splice(e,1)

}
function display(){
  console.log(arr);
}



var l=prompt("enter your password")
if (l==="rajib") {
  var f=prompt("would youlike to enter the web page?y/n");
}else {
  alert("password is incorrect")
}

var request="";

while(f==='y'){
  request=prompt("enter to add,remove display and exit.")
  if(request === "add"){
    add()

  }else if (request === "remove") {
    remove()

  }else if (request ==="display") {
    display()

  }else{
    alert("Thanks")
    console.log("Rajib IS Best");
    f++

  }


}
if(f ==='n'){
  alert("Thanks For Try")
}
