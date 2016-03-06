$(document).ready( function () {
// $( function(){ this could work as well!
  "use strict";

  // declare variables for each unicode character key

  var wKing = "&#9812";
  var wQueen = "&#9813";
  var wRook = "&#9814";
  var wBishop = "&#9815";
  var wKnight = "&#9816";
  var wPawn = "&#9817";
  var bKing = "&#9818";
  var bQueen = "&#9819";
  var bRook = "&#9820";
  var bBishop = "&#9821";
  var bKnight = "&#9822";
  var bPawn = "&#9823";

  //should I put all of the moves into an array? That way, I can just call moves[1] when the first move happens, moves[2] with the second, moves[0] for the beginning, etc...
  var newGame = [
    [wRook,wKnight,wBishop,wQueen,wKing,wBishop,wKnight,wRook],
    [wPawn,wPawn,wPawn,wPawn,wPawn,wPawn,wPawn,wPawn],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn],
    [bRook,bKnight,bBishop,bQueen,bKing,bBishop,bKnight,bRook]
  ];

  var firstMove = [
    [wRook,wKnight,wBishop,wQueen,wKing,wBishop,wKnight,wRook],
    [wPawn,wPawn,wPawn,wPawn," ",wPawn,wPawn,wPawn],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," ",wPawn," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn],
    [bRook,bKnight,bBishop,bQueen,bKing,bBishop,bKnight,bRook]
  ];

  //this runs upon page load and populates the board with the initial positions of the pieces
  for (var i=0; i < firstMove.length; i++){
    // console.log("i is " + i);
    for (var I=0; I < newGame.length; I++){
      console.log("i is " + i);
      console.log("I is " + I);
      // console.log("firstMove[i][I] is " + firstMove[i][I]);
      // $(".square").html(firstMove[i][I]);//this did not work :) it put r in every square
      // console.log("firstMove[i][I+1] is " + firstMove[i][I]);
      $(".chessBoard").append('<div class="square">'+newGame[i][I]+'</div>');

      // if i is even AND I is odd, it's a dark square OR if i is odd AND I is even, it's a dark square
      // else, it's a light square
      console.log(i*8 + I);//this gives a unique identifier to each square, starting at 0
      // this function provides the correct colors to the board squares
      if (i % 2 === 0 && I % 2 !== 0 || i % 2 !== 0 && I % 2 === 0){
        $(".square").eq(i*8 + I).addClass("dkSquare");
      } else {
        //do nothing
      }
        //  || i % 2 !== 0 && I % 2 === 0
      // } else {
        //do nothing
      // }


    }

  }

  $("#rewind").on("click", function () {
    console.log("rw");
    //make the board go back to position newGame
    //reset the page?
  });

  $("#stepBack").on("click", function () {
    console.log("sb");
    //undo the last move
  });

  $("#play").on("click", function () {
    console.log("play");
    //play each move, with a ~1 second delay between the moves
  });

  $("#stepForward").on("click", function () {
    console.log("sf");
    //execute the next move
    // put the current Move
    // do the nested for loop thing? I kinda want to try it. It should work, but there's a better way to do it.
    for (var i=0; i < firstMove.length; i++){
      console.log("i is " + i);
      for (var I=0; I < firstMove[i].length; I+=2){
        console.log("I is " + I);
        // console.log("firstMove[i][I] is " + firstMove[i][I]);
        // $(".square").html(firstMove[i][I]);//this did not work :) it put r in every square
        // console.log("firstMove[i][I+1] is " + firstMove[i][I]);
        $(".chessBoard").append('<div class="square">'+firstMove[i][I]+'</div><div class="square">'+firstMove[i][I+1]+'</div>');

        // $(".square").

        // <div class='square dkSquare'>"+firstMove[i][I+1]+"</div>
      }

    }

    });

  $("#fastForward").on("click", function () {
    console.log("ff");
    //make the board go to the final step
  });





});
