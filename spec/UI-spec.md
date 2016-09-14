`UI` is responsible for all of the things that the user can interact with, such as
(a) brightening/dimming the game board
(b) managing the game piece, including displaying the correct game piece depending
    on whose turn it is, and moving the game piece over the column where the mouse
    is
(c) showing a popup confirming the desire to reset the game

# Unit Spec : `UI`

## `changeOpacity`

1.  Takes a jQuery object as an argument and increases or decreases its opacity.

## `displayGamePiece`

1.  Displays the current player's game piece above the middle column of the game
    board.

## `moveGamePiece`

1.  Displays the current player's game piece above the column that the mouse is
    currently hovering over.
2.  If the mouse is not hovering over a column,
  a.  the game piece stays over the column it most recently was over

## `confirmResetGame`

1.  If the 'RESET' button is pressed
  a.  and there is no active game,
    i.    nothing happens.
  b.  and there is an active game,
    i.    confirms that the user wants to reset the game,
    ii.   if the user wants to reset the game,
        a.  calls necessary methods to reset the game.
    iii.  if the user does not want to reset the game,
        a.  do nothing.
