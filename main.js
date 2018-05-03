var deck = [  1  ,   1 ,   1  ,   1  ,  2  ,   2 ,   2  ,   2  ,   3  ,  3  ,  3  ,  3  ,   4  ,   4  ,   4  ,    4  ,   5  ,    5  ,   5  ,   5  ,
              6  ,   6  ,   6  ,   6  ,   7  ,    7  ,   7  ,   7  , 8  ,    8  ,    8  ,    8  ,    9  ,    9  ,   9  ,   9  ,   10   ,   10  ,  10  , 10  ,
              11  , 11  , 11  , 11  , 12  ,  12  , 12  , 12  , 13  ,  13  , 13  , 13  ];

var playerHand = [];
var aiHand = [];

var score = 0;


function GetRandomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function DealCards()
{
  for(var i = 0; i < 5; i++)
  {
    var x = GetRandomInt(0, 51);
    playerHand.push(deck[x]);
  }
  for(var i = 0; i < 5; i++)
  {
    var x = GetRandomInt(0, 51);
    aiHand.push(deck[x]);
  }
  DisplayHand(playerHand);
}

//Display the hand
function DisplayHand(hand)
{
  console.log(hand);
}

//Computer reads playerHand and checks for "books" (cards of the same face value)
/*function CheckForDuplicates(hand)
{
  var results = [];
  var sortedHand = hand.slice().sort();

  for (var i = 0; i < sortedHand.length - 1; i++) {
      if (sortedHand[i + 1] == sortedHand[i]) {
        results.push(sortedHand[i]);
      }
  //return results;
  console.log(results);
  }
} */

function GoFish ()
{
  console.log("Ask the Ai if they have a card you have")
  if
}
