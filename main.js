var deck = [  1  ,   1 ,   1  ,   1  ,  2  ,   2 ,   2  ,   2  ,   3  ,  3  ,  3  ,  3  ,   4  ,   4  ,   4  ,    4  ,   5  ,    5  ,   5  ,   5  ,
              6  ,   6  ,   6  ,   6  ,   7  ,    7  ,   7  ,   7  , 8  ,    8  ,    8  ,    8  ,    9  ,    9  ,   9  ,   9  ,   10   ,   10  ,  10  , 10  ,
              11  , 11  , 11  , 11  , 12  ,  12  , 12  , 12  , 13  ,  13  , 13  , 13  ];

var player1Hand = [];
var player2Hand = [];

function GetRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function DealCards(){
  for(var i = 0; i < 5; i++){
    var x = GetRandomInt(0, 51);
    player1Hand.push(deck[x]);

      }
  for(var i = 0; i < 5; i++){
    var x = GetRandomInt(0, 51);
    player2Hand.push(deck[x]);

          }
    console.log(player1Hand.length);
    console.log(player2Hand.length);
  }

function GoFish(){
  if(i = 0; i < )
}
