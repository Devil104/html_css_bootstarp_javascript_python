//function smile(asmile,bsmile){
//  return (asmile && bsmile) || (!asmile && !bsmile)
//}

//function sa(str,n) {
//  var retuenstr="";
//  i=0;
//  while (i<n) {
//    retuenstr +=str
//    i++

//  }
//  return retuenstr
//}

//function sum(a,b,c) {
//  if (c===13) {
//    return (a+b)

//  }else if (b===13) {
//    return (a)

//  }else {
//    return (a+b+c)
//  }


//}

//function go(speed, is_birthday){


  //if (speed<=60 && !is_birthday) {
    //return (0)

  //}else if (61<=speed<=80 && !is_birthday) {
    //return (1)

  //}else if (speed>=81 && !is_birthday) {
    //return (2)

  //}else if ( is_birthday) {
    //speed-=5
    //return 0

  //}else {
    //return 0
  //}

  //}

function gi(speed,is_birthday) {
  if (is_birthday) {
    speed -= 5

  }if (speed <=60) {
    return 0

  }if (61<=speed<=80) {
    return 1

  }else {
    return 2

  }


}
