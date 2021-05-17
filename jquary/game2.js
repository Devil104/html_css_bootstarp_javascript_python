var player1 =prompt("Player one: Enter Your Name,you will be Blue");
var player1color ='black';

var player2 =prompt("Player Two: Enter Your Name,you will be Yellow");
var player2color ='white';

var game_on=true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
  console.log("you won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);

}

function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);

}

function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color') ;

}
function checkBottom(colIndex) {
  var colorReport = returnColor(5,colIndex);
  for (var row = 5 ; row > -1; row--) {
    colorReport=returnColor(row,colIndex);
    if (colorReport === 'rgb(128, 128, 128)'){
      return row
    }
  }
}
function colorMatchCheck(one,two,three,four) {
  return (one === two && one === three && one === four && one !=='rgb(128, 128, 128)' && one!==undefined)

}

function horixontalCheck(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

function varticalCheck(){
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))) {
        console.log('vartical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

function diagonalCheck(){
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }if (colorMatchCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;

      }

      else {
        continue;
      }
    }
  }
}

var currentPlayer = 1;
var currentName=player1;
var currentColor=player1color;

$('h3').text(player1+ " it is your turn,pick a column to drop in!")

$('.board button').on('click',function(){
  var col = $(this).closest('td').index();
  var bottomAvail =checkBottom(col);
  changeColor(bottomAvail,col,currentColor);

  if(horixontalCheck() || varticalCheck() || diagonalCheck()){
    $('h1').text(currentName+" You have won!");
    $('h3').slideUp();
    $('h2').slideUp();
    alert(currentName+",You Won.")
  }

  currentPlayer = currentPlayer * -1;
  if (currentPlayer ===1){
    currentName = player1;
    $('h3').text(currentName+ " it is your turn.")
    currentColor = player1color;
  }else{
    currentName = player2;
    $('h3').text(currentName+" it is your turn")
    currentColor =player2color;

  }
})

var q=document.querySelector("h1");


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

$('body').css('background-color','#ffa500')
