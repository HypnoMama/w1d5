
var numList = [];
sortData = function(ary) {
    ary.sort(function(a, b) {
      return a - b;
    })
    return ary;
  }

module.exports = {

  storeNumber: function(num) {
    numList.push(num);
    if (numList.length > 1) {
      return sortData(numList);
    } else {
      return numList;

    }
  }

}