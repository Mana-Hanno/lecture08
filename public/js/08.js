function fizzbuzz(a){
  var result = a;

  if (a % 3 == 0 && a % 5 ==0){
    var result = "fizzbuzz"
  }else if(a % 5 ==0){
    var result = "buzz"
  }else if(a % 3 ==0){
    var result = "fizz"
  }
  return result;
  }
