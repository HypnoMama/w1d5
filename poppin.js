


var dollars = Number(process.argv[2]);

function bottles(dollars){
  //given 20
  var purchasedBottles = dollars/2; //10
  var fullBottles = purchasedBottles; //10
  var freeFromCaps = Math.floor(fullBottles/4) //2
  var freeFromBottles = fullBottles/2 //5
  var totalBottles = purchasedBottles + freeFromBottles + freeFromCaps; //17
  var leftOverCaps = purchasedBottles%4 //2
  var leftOverBottles = purchasedBottles%2 //0
  fullBottles = freeFromCaps + freeFromBottles
  var totalBottlesEarned = fullBottles;
  var totalBottlesEarnedFromCaps = freeFromCaps;
  var totalBottlesEarnedFromBottles = freeFromBottles;
  // console.log(leftOverBottles, leftOverCaps)


  function calcFree(fullBottles, leftOverCaps, leftOverBottles) {

    if (fullBottles < 1) {
      return totalBottles, leftOverCaps, leftOverBottles
    } else {

      freeFromCaps = Math.floor(fullBottles/4);
      totalBottles += freeFromCaps;
      totalBottlesEarnedFromCaps += freeFromCaps;

      freeFromBottles = Math.floor(fullBottles/2) //3, 1 leftover
      totalBottles += freeFromBottles //21
      totalBottlesEarnedFromBottles += freeFromBottles

      leftOverCaps += fullBottles%4 // 5
      // console.log("leftovercaps: " + leftOverCaps)
      leftOverBottles += fullBottles%2 //1
      // console.log("leftoverbottles" + leftOverBottles)

      fullBottles = Math.floor(freeFromCaps + freeFromBottles)//4
      totalBottlesEarned += fullBottles;


      if (leftOverCaps >= 4){
        leftOverCaps -= 4
        totalBottles += 1
        totalBottlesEarnedFromCaps += 1
        fullBottles +=1
      }
      if (leftOverBottles >= 2) {
        leftOverBottles -= 2
        totalBottles += 1
        totalBottlesEarnedFromBottles += 1
        fullBottles += 1
      }

    }

    calcFree(fullBottles, leftOverCaps, leftOverBottles);
  }
  calcFree(fullBottles, leftOverCaps, leftOverBottles)
  console.log(totalBottlesEarnedFromBottles, totalBottlesEarnedFromCaps, leftOverBottles)
  return("TOTAL BOTTLES: " +
    Math.floor(totalBottles) +  "\nTOTAL EARNED: \n  BOTTLES: "
    + totalBottlesEarnedFromBottles + "\n  CAPS: " +
    totalBottlesEarnedFromCaps )

}


console.log(bottles(dollars));
// 2 hours
//10 mins
//15 mins

 // "\nREMAINING BOTTLES: " +
 //    leftOverBottles + "\nREMAINING CAPS: "+ leftOverCaps +

  //given a dollar amount
  //returns num of bottles
  //2 empty bottles = 1 free pop
  //every 4 bottle caps = 1 free pop
  //so for every 4 bottles you buy you get 3 bottles free
  //each bottle costs $2
  //so an intial investment of $20 would buy you
  //10 bottles
  //10/4 = 3 bottles free, the left over 2
  //would give you 2 more bottles, with 2 bottle caps remaining
  //so for $20, 10 bottles you would get
  //5 bottles - call function again until you have no left
  //over bottles or caps and all get traded in