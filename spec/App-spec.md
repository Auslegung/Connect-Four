`App` handles the logic of the game:
(a) maintaining a 'state' (i.e. whose turn it is),
(b) checking for a winner after each piece is played,
(c) maintaining the 2d array corresponding to the game board

# Unit Spec : `App`

## `whoseTurn`

1.  After a game piece is played
      a.  waits 1 second,
      b.  alternates whose turn it is

## `checkForWinner`

1.  After a game piece is played
      a.  checks vertically, horizontally, and diagonally for 4 consecutive
          pieces that match the current player's,
        i.    and if there is,
          a.    declares a winner,
          b.    stops the game,
          c.    dims the board,
          d.    brightens the start button.
        ii.   and if there is not,
          a.    nothing happens.

## `startGame`

1.  When the 'Start' button is clicked,
      a.  and there is not an active game,
        i.    starts the game,
        ii.   changes q from undefined to true.
      b.  and there is an active game,
        i.    nothing happens.
