VARIABLES

var numInARow = 4;        // the number of consecutive pieces to declare a winner
var test = false;         // helps check for a winner
var i = 0;                // incrementer in various for loops
var q;                    // indicates whose turn it is. Undefined = no game,
                          // true = player1, false = player2
var numOfRows = 6;        // make the number of rows mutable
var numOfColumns = 7;     // make the number of columns mutable
var numToWin = 4;         // make the win condition mutable



EW winner = {x = -1, y = 0}
NW-SE winner = {x = 1, y = -1}
NE-SW winner = {x = -1, y = -1}

// takes two arguments, a (0 to 5) and b (0 to 6), where a is the row (dataid) and b is the column (columnNum) of the recently placed piece, corresponding to the main array as well
checkForWinner = function(a, b) {
  1, 3 for example.
  var test = false;
  // NS winner
  NS winner = {x = 0, y = 1}
  for (var i = 2; i < App.numInARow; i++) {
    if (arr[a+(y*i)][b] === playerQ) {
      test = true;
    } // end if
    else {
      test = false;
    } // end else
  } // end for

  // EW Winner
  EW winner = {x = -1, y = 0}
  for (var i = 2; i < App.numInARow; i++) {

  } // end for
} // end checkForWinner







var App = {

// includes displaying game board, pieces, text, buttons, leader board, and color picker
  var Display = {

  }; // end Display


// includes buttons and manipulating pieces
  var UI = {

  }; // end UI


  var EventHandlers = {
    // board's alpha goes from .5 to 1, and text is displayed with the flash rule from https://daneden.github.io/animate.css/, displaying playerQ's turn, where q === false, then each time a piece is played q = !q;
    onClickStart = function() {

    }; // end onClickStart

    onClickReset = function() {

    }; // end onClickReset

    onClickColumn = function() {

    }; // end onClickColumn

    // Optional
    onClickPiece = function() {

    }; // end onClickPiece

  }; // end EventHandlers

}; // end App
