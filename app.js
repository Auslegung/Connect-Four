$(function() {

  var App = {

    q: 0,            // 0 = no game, 1 = player1, -1 = player2
    numOfRows: 6,    // number of rows in the game board
    numOfColumns: 7, // number of columns in the game board
    numToWin: 4,     // number of pieces needed to connect to win
    maxOpacity: 1,   // maximum opacity of game board and start button
    minOpacity: 0.5, // minimum opacity of game board and start button
    b0ardArray: [ [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0] ],

    // determines whose turn it is by changing q
    whoseTurn: function() {
      if (App.q === 0) {
        App.q = 1;
      } // end if
      else {
        App.q = -App.q;
      } // end else
      return App.q;
    }, // end whoseTurn

    // takes two arguments, a (0 to 5) and b (0 to 6), where a is the row (dataid) and b is the column (columnNum) of the recently placed piece, corresponding to the main array as well
    checkForWinner: function(a, b) {
      // 1, 3 for example.
      var test = false;

      // EW winner = {x = -1, y = 0}
      // NW-SE winner = {x = 1, y = -1}
      // NE-SW winner = {x = -1, y = -1}
      // NS winner = {x = 0, y = 1}
      for (var i = 2; i < App.numInARow; i++) {
        if (arr[a+(y*i)][b] === playerQ) {
          test = true;
        } // end if
        else {
          test = false;
        } // end else
      } // end for

      // EW Winner
      for (var i = 2; i < App.numInARow; i++) {

      } // end for
    }, // end checkForWinner

    // // starts the game by setting var q to 1.
    // startGame: function() {
    //   App.q = 1;
    // }, // end startGame
  }; // end App


  // responsible for showing the data managed by `App` in the browser by
  // changing the text on the screen, displaying whose turn it is, and
  // displaying a winner.
  var Display = {

    displayTurn: function() {

    }, // end displayTurn

    displayWinner: function() {

    }, // end displayWinner

  }; // end Display


  // responsible for all of the things that the user can interact with, such as
  // (a) brightening/dimming the game board
  // (b) managing the game piece, including displaying the correct game piece
  //     depending on whose turn it is, and moving the game piece over the column
  //     where the mouse is
  // (c) showing a popup confirming the desire to reset the game
  var UI = {
      // modifies the argument's opacity from 0.5 to 1 or from 1 to 0.5
    changeOpacity: function(buttonOrBoard) {
      if ( $(this).css('opacity').val() < App.maxOpacity ) {
        $(this).css('opacity').val() = App.maxOpacity;
      } // end if
      else {
        $(this).css('opcaity').val() = App.minOpacity;
      } // end else
    }, // end changeOpacity

    displayGamePiece: function() {

    }, // end displayGamePiece

    moveGamePiece: function() {

    }, // end moveGamePiece

    confirmResetGame: function() {

    }, // end confirmResetGame

  }; // end UI


  var EventHandlers = {
    // board's alpha goes from .5 to 1, and text is displayed with the flash rule from https://daneden.github.io/animate.css/, displaying playerQ's turn, where q === false, then each time a piece is played q = !q;
    onClickStart: function() {
      event.preventDefault();
    }, // end onClickStart

    onClickReset: function() {

    }, // end onClickReset

    onClickColumn: function() {
      console.log('clicked', $(this));
    }, // end onClickColumn

    // Optional
    // onClickPiece: function() {
    //
    // }; // end onClickPiece

  }; // end EventHandlers
  $('#column6').click(EventHandlers.onClickColumn);
  $('#column5').click(EventHandlers.onClickColumn);
  $('#column4').click(EventHandlers.onClickColumn);
  $('#column3').click(EventHandlers.onClickColumn);
  $('#column2').click(EventHandlers.onClickColumn);
  $('#column1').click(EventHandlers.onClickColumn);
  $('#column0').click(EventHandlers.onClickColumn);

  $('#column5').hover(
    function() {
      console.log('hovered');
    });
}); // end document.ready
