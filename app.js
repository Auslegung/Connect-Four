$(function() {

  var App = {

    q: 0,            // 0 = no game, 1 = player1, -1 = player2
    numOfRows: 6,    // number of rows in the game board
    numOfColumns: 7, // number of columns in the game board
    numToWin: 4,     // number of pieces needed to connect to win
    maxOpacity: 1,   // maximum opacity of game board and start button
    minOpacity: 0.4, // minimum opacity of game board and start button
    boardArray: [],

    // determines whose turn it is by changing q
    changeTurn: function() {
      if (App.q === 0) {
        App.q = 1;
      } // end if
      else {
        App.q = -App.q;
      } // end else
      return App.q;
    }, // end changeTurn

    // takes two arguments, a (0 to 5) and b (0 to 6), where a is the row (dataid) and b is the column (columnNum) of the recently placed piece, corresponding to the main array as well
    checkForWinner: function(a, b) {
      // 1, 3 for example.
      var test = false;

      // EW winner = {x = -1, y = 0}
      // NW-SE winner = {x = 1, y = -1}
      // NE-SW winner = {x = -1, y = -1}
      // NS winner = {x = 0, y = 1}
      for (var i = 2; i < App.numInARow; i++) {
        if (App.boardArray[a+(y*i)][b] === playerQ) {
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

    // takes a column and increments its data-row value
    incrementDataRow: function(column) {
      console.log('original value: ', $(column).attr('data-row'));
      var newRow = Number($(column).attr('data-row')) + 1;
      column.attr('data-row', newRow);
      console.log('updated value: ', $(column).attr('data-row'));

    }, // end incrementDataRow

    // takes a column, and uses data-column and data-row to modify
    // App.boardArray to reflect where the game piece was placed
    modifyArray: function(column) {
      var arrRow = Number($(column).attr('data-row'));
      var arrColumn = Number($(column).attr('data-column'))
      App.boardArray[App.numOfRows - arrRow][arrColumn] = App.q;
    }, // end modifyArray

    // resets game by setting data-row to 0 for all columns in the game board,
    // setting App.q to 0, dimming the board, and resetting App.boardArray
    resetGame: function() {
      for (var i = 0; i < App.numOfColumns; i++) {
        columnId = 'column' + i.toString();
        $('#'+columnId).attr('data-row', '0');
      } // end for
      App.q = 0;
      UI.changeOpacity($('#board'));
      App.boardArray(App.numOfColumns).fill(0);
      for (var i = 0; i < App.numOfColumns; i++) {
        App.boardArray[i](App.numOfRows).fill(0);
      } // end for
      App.createBoardArray();
    }, // end resetGame

    createBoardArray: function() {
      App.boardArray = Array(App.numOfRows).fill(Array(App.numOfColumns).fill(0));
    },

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
      if (App.q === 1) {
        $('#turn').text('Player 1\'s Turn')
      } // end if
      else if (App.q === -1) {
        $('#turn').text('Player 2\'s Turn')
      } // end else if
      else {
        $('#turn').text('Shall we play a game?')
      } // end else
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
    changeOpacity: function(boardOrButton) {
      if ( boardOrButton.css('opacity') < App.maxOpacity ) {
        boardOrButton.fadeTo( 800, App.maxOpacity );
      } // end if
      else {
        boardOrButton.fadeTo( 800, App.minOpacity );
      } // end else
    }, // end changeOpacity

    displayGamePiece: function() {
      $('#pieces').toggle();
      $('').append($('#pieces'));
    }, // end displayGamePiece

    moveGamePiece: function() {
      $('#pieces').toggle();
      $(this).prepend($('#pieces'));
    }, // end moveGamePiece

    confirmResetGame: function() {
      App.resetGame();
    }, // end confirmResetGame

  }; // end UI


  var EventHandlers = {
    // board's alpha goes from .5 to 1, and text is displayed with the flash rule from https://daneden.github.io/animate.css/, displaying playerQ's turn, where q === false, then each time a piece is played q = !q;
    onClickStart: function() {
      if (App.q === 0) {
        App.changeTurn();
        Display.displayTurn();
        UI.changeOpacity($('#board'));
        App.createBoardArray();
      }
    }, // end onClickStart

    onClickReset: function() {
      UI.confirmResetGame();
    }, // end onClickReset

    onClickColumn: function() {
      App.incrementDataRow($(this));
      App.modifyArray($(this));
      App.checkForWinner();
    }, // end onClickColumn

    // Optional
    // onClickPiece: function() {
    //
    // }; // end onClickPiece

  }; // end EventHandlers
  $('#start').click(EventHandlers.onClickStart);
  $('#reset').click(EventHandlers.onClickReset);
  $('#column6').click(EventHandlers.onClickColumn);
  $('#column5').click(EventHandlers.onClickColumn);
  $('#column4').click(EventHandlers.onClickColumn);
  $('#column3').click(EventHandlers.onClickColumn);
  $('#column2').click(EventHandlers.onClickColumn);
  $('#column1').click(EventHandlers.onClickColumn);
  $('#column0').click(EventHandlers.onClickColumn);
  $('#column6').hover(UI.moveGamePiece);
  $('#column5').hover(UI.moveGamePiece);
  $('#column4').hover(UI.moveGamePiece);
  $('#column3').hover(UI.moveGamePiece);
  $('#column2').hover(UI.moveGamePiece);
  $('#column1').hover(UI.moveGamePiece);
  $('#column0').hover(UI.moveGamePiece);
}); // end document.ready
