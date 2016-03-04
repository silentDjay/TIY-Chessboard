// $(document).ready( function () {
//   "use strict";
// not sure if these two jquery initiators are interchangeable. Probably not, but they prbably both work for this project

$(function () {
  "use strict";

  //I should probably declare variables for the chess pieces according to their unicode counteparts
  // name          symbol unicode html
  // white chess king	♔	U+2654	&#9812;
  // white chess queen	♕	U+2655	&#9813;
  // white chess rook	♖	U+2656	&#9814;
  // white chess bishop	♗	U+2657	&#9815;
  // white chess knight	♘	U+2658	&#9816;
  // white chess pawn	♙	U+2659	&#9817;
  // black chess king	♚	U+265A	&#9818;
  // black chess queen	♛	U+265B	&#9819;
  // black chess rook	♜	U+265C	&#9820;
  // black chess bishop	♝	U+265D	&#9821;
  // black chess knight	♞	U+265E	&#9822;
  // black chess pawn	♟	U+265F	&#9823;

  var whitePawn = "&#9817";

  //white pieces have capital letters; black pieces lower case

  //should I put all of the moves into an array? That way, I can just call moves[1] when the first move happens, moves[2] with the second, moves[0] for the beginning, etc...
  var newGame = [
    ["R","N","B","Q","K","B","N","R"],
    ["P","P","P","P","P","P","P","P"],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    ["p","p","p","p","p","p","p","p"],
    ["r","n","b","q","k","b","n","r"]
  ];

  //[1][5] = " "
  //[3][5] = "P"
  var firstMove = [
    ["R","N","B","Q","K","B","N","R"],
    ["P","P","P","P"," ","P","P","P"],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," ",whitePawn," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    ["p","p","p","p","p","p","p","p"],
    ["r","n","b","q","k","b","n","r"]
  ];

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
      // console.log("i is " + i);
      for (var I=0; I < firstMove[i].length; I++){
        // console.log("I is " + I);
        console.log("firstMove[i][I] is " + firstMove[i][I]);
        $(".square").html(firstMove[i][I]);//this did not work :) it put r in every square
        //$(".square").nthSibling(I).html(firstMove[i][I]);??????
      }

    }

    });

  $("#fastForward").on("click", function () {
    console.log("ff");
    //make the board go to the final step
  });





});
