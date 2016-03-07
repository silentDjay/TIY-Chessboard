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

  var gamePlay = // this array of arrays of arrays contains the positioning of each move
  [
    [ // gamePlay[0] starting position
    [wRook,wKnight,wBishop,wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wPawn,wPawn,wPawn,wPawn,wPawn,wPawn,wPawn],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn],
    [bRook,bKnight,bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[1] first move...
    [wRook,wKnight,wBishop,wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wPawn,wPawn,wPawn," ",wPawn,wPawn,wPawn],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," ",wPawn," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn],
    [bRook,bKnight,bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[2] second move...
    [wRook,wKnight,wBishop,wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wPawn,wPawn,wPawn," ",wPawn,wPawn,wPawn],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," ",wPawn," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," ",bKnight," "," "," "," "," "],
    [bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn],
    [bRook," ",bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[3]
    [wRook,wKnight,wBishop,wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wPawn,wPawn,wPawn," ","",wPawn,wPawn],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," ",wPawn,wPawn," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," ",bKnight," "," "," "," "," "],
    [bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn,bPawn],
    [bRook," ",bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[4]
    [wRook,wKnight,wBishop,wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wPawn,wPawn,wPawn," ","",wPawn,wPawn],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," ",wPawn,wPawn," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," ",bKnight,bPawn," "," "," "," "],
    [bPawn,bPawn,bPawn," ",bPawn,bPawn,bPawn,bPawn],
    [bRook," ",bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[5]
    [wRook,wKnight,wBishop,wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn," ",wPawn,wPawn," ","",wPawn,wPawn],
    [" ",wPawn," "," "," "," "," "," "],
    [" "," "," "," ",wPawn,wPawn," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," ",bKnight,bPawn," "," "," "," "],
    [bPawn,bPawn,bPawn," ",bPawn,bPawn,bPawn,bPawn],
    [bRook," ",bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[6]
    [wRook,wKnight,wBishop,wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn," ",wPawn,wPawn," ","",wPawn,wPawn],
    [" ",wPawn," "," "," "," "," "," "],
    [" "," "," "," ",wPawn,wPawn," "," "],
    [" "," "," "," ",bPawn," "," "," "],
    [" "," ",bKnight,bPawn," "," "," "," "],
    [bPawn,bPawn,bPawn," "," ",bPawn,bPawn,bPawn],
    [bRook," ",bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[7]
    [wRook,wKnight," ",wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wBishop,wPawn,wPawn," ","",wPawn,wPawn],
    [" ",wPawn," "," "," "," "," "," "],
    [" "," "," "," ",wPawn,wPawn," "," "],
    [" "," "," "," ",bPawn," "," "," "],
    [" "," ",bKnight,bPawn," "," "," "," "],
    [bPawn,bPawn,bPawn," "," ",bPawn,bPawn,bPawn],
    [bRook," ",bBishop,bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[8]
    [wRook,wKnight," ",wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wBishop,wPawn,wPawn," ","",wPawn,wPawn],
    [" ",wPawn," "," "," "," "," "," "],
    [" "," "," "," ",wPawn,wPawn," "," "],
    [" "," "," "," ",bPawn," "," "," "],
    [" "," ",bKnight,bPawn," "," "," "," "],
    [bPawn,bPawn,bPawn,bBishop," ",bPawn,bPawn,bPawn],
    [bRook," "," ",bKing,bQueen,bBishop,bKnight,bRook]
    ],
    [ // gamePlay[9]
    [wRook," "," ",wKing,wQueen,wBishop,wKnight,wRook],
    [wPawn,wBishop,wPawn,wPawn," ","",wPawn,wPawn],
    [" ",wPawn,wKnight," "," "," "," "," "],
    [" "," "," "," ",wPawn,wPawn," "," "],
    [" "," "," "," ",bPawn," "," "," "],
    [" "," ",bKnight,bPawn," "," "," "," "],
    [bPawn,bPawn,bPawn,bBishop," ",bPawn,bPawn,bPawn],
    [bRook," "," ",bKing,bQueen,bBishop,bKnight,bRook]
    ],
  ];

  var move = 0;//this variable is going to keep track of what move of the game we're on through the various steps forward/back/etc...

  //this runs upon page load and populates the board with the initial positions of the pieces
  for (var i=0; i < 8; i++){ // iterates through the rows
    for (var I=0; I < 8; I++){ // iterates through the columns

      $(".chessBoard").append('<div class="square">'+gamePlay[move][i][I]+'</div>');//populate the board with squares and chess pieces
      // this populates the correct colors to the board squares
      if (i % 2 === 0 && I % 2 !== 0 || i % 2 !== 0 && I % 2 === 0){// if i is even AND I is odd, it's a dark square OR if i is odd AND I is even, it's a dark square
        $(".square").eq(i*8 + I).addClass("dkSquare");//(i*8 + I) gives a unique identifier (from 0 to 63) to each square
      } else {
        //do nothing; it's a light square
      }
    }
  }

  $("#rewind").on("click", function () {

    move = 0; // add 1 to the move counter (global variable)
    console.log(move);
    $(".square").empty();//empty the board of chess pieces so we can fill it with new ones

    for (var i=0; i < 8; i++){
      for (var I=0; I < 8; I++){
        $(".square").eq(i*8 + I).html(gamePlay[move][i][I]);//populate the tiles with the correct pieces
        if (i % 2 === 0 && I % 2 !== 0 || i % 2 !== 0 && I % 2 === 0){
          $(".square").eq(i*8 + I).addClass("dkSquare");
        } else {
        }
      }
    }

  });

  $("#stepBack").on("click", function () {

    if (move > 0){ // only step back when you can
      move -= 1; // subtract 1 from the move counter (global variable)
    } else {
      // don't step back
    }

    console.log(move);
    $(".square").empty();//empty the board of chess pieces so we can fill it with new ones

    for (var i=0; i < 8; i++){
      for (var I=0; I < 8; I++){
        $(".square").eq(i*8 + I).html(gamePlay[move][i][I]);//populate the tiles with the correct pieces
        if (i % 2 === 0 && I % 2 !== 0 || i % 2 !== 0 && I % 2 === 0){
          $(".square").eq(i*8 + I).addClass("dkSquare");
        } else {
        }
      }
    }
  });

  $("#play").on("click", function () {
    console.log("play");
    //play each move, with a ~1 second delay between the moves
  });

  $("#stepForward").on("click", function () {

    if (move < gamePlay.length - 1){ // only move forward when you can
      move += 1; // add 1 to the move counter (global variable)
    } else {
      // there is no next move
    }

    console.log(move);
    $(".square").empty();//empty the board of chess pieces so we can fill it with new ones

    for (var i=0; i < 8; i++){
      for (var I=0; I < 8; I++){
        $(".square").eq(i*8 + I).html(gamePlay[move][i][I]);//populate the tiles with the correct pieces
        if (i % 2 === 0 && I % 2 !== 0 || i % 2 !== 0 && I % 2 === 0){
          $(".square").eq(i*8 + I).addClass("dkSquare");
        } else {
        }
      }
    }
  });

  $("#fastForward").on("click", function () {

    move = gamePlay.length - 1; // move to the end of the sequence
    console.log(move);
    $(".square").empty();//empty the board of chess pieces so we can fill it with new ones

    for (var i=0; i < 8; i++){
      for (var I=0; I < 8; I++){
        $(".square").eq(i*8 + I).html(gamePlay[move][i][I]);//populate the tiles with the correct pieces
        if (i % 2 === 0 && I % 2 !== 0 || i % 2 !== 0 && I % 2 === 0){
          $(".square").eq(i*8 + I).addClass("dkSquare");
        } else {
        }
      }
    }

  });





});
