function maxProfit(arr) {
  var x = 0
  var start = arr[x]
  var profit = 0;
  for (var y = 0; y < arr.length-1; y++) {
    for (var i = 0; i < arr.length -1; i++) {
      if (start < arr[i+1]) {
      if ((arr[i+1] - start) > profit){
        profit = (arr[i+1] - start);
      }
      }
    }
    x++
    start = arr[x]

  }if (profit > 0) {
    return profit
  } else {
    return -1
  }
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))
//if start === arr[arr[i].length-1]
//return profit
//else maxProfit()
function maxProfit2(arr) {
  profit = 0;
  if (start === arr[arr.length-1]){
    if (profit > 0){
      return profit;
    }else {
      return -1
    }
  }
  for (var i = 0; i < arr.length; i++) {
    start = arr[i];
    if ((start < arr[i+1]) && ((arr[i+1] - start) > profit)) {
    profit = arr[i+1] - start
    }
  }
  arr.shift();
  maxProfit2(arr);
}
console.log(maxProfit2([45, 24, 35, 31, 40, 38, 11]))

