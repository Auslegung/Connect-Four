On page load, the board is at .5 alpha, and the start button is bright.  Only the images load, and the start button has functionality.  After pressing the start button, everything else loads.

If user clicks the start button, the board's alpha goes from .5 to 1, and text is displayed with the flash rule from https://daneden.github.io/animate.css/, displaying playerQ's turn, where q === false, then each time a piece is played q = !q;

If the mouse hovers over a column, that column is highlighted very slightly, and playerQ's colored piece appears above the column to indicate to the user which selection they are about to make.

If a column is clicked, place the relevant piece in the bottommost empty slot.  Piece is dropped from the top using a timer thing we learned in advanced css stuff on I think Friday.  Also use image maps for click events on the image https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map.

Every column has a dataid=0.  Each time a column is clicked, increment this.dataid, that way the logic knows where that piece went, and update the array to reflect this.  When the column is clicked, the 2d array will be modified like so: arr[5-columnDataId][columnNum] = playerQ, where columnNum is the number of the column from left to right, 0-6, retrieved from the image map, and columnDataId is an html data id set to each column as mapped by image map.

After a column is clicked, check if the recently placed piece makes 4 consecutive pieces, horizontally, vertically, NW-SE or NE-SW.  If there is, wait 1/2 second and declare that the previous player is the winner.

EW winner = {x = -1, y = 0}
NW-SE winner = {x = 1, y = -1}
NE-SW winner = {x = -1, y = -1}

// takes two arguments, a (0 to 5) and b (0 to 6), where a is the row and b is the column of the recently placed piece, corresponding to the main array as well
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

VARIABLES

var numInARow = 4;        // the number of consecutive pieces to declare a winner
var test = false;         // helps check for a winner
var i = 0;                // incrementer in various for loops
var q = false;            // indicates whose turn it is
