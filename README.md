# Project 01 : Connect Four

## Instructions

For this project, you will be creating Connect Four from scratch, including the
HTML, CSS, and JavaScript/jQuery.  Its specified behavior is as follows:

1.  When the 'START' button is clicked,
      a.  and there is not an active game,
        i.    the game begins,
      b.  and there is an active game,
        i.    nothing happens.
2.  When the mouse hovers over a column of the game board,
      a.  and there is an active game,
        i.    that column is highlighted to give the player feedback.
      b.  and there is not an active game,
        i.    nothing happens.
3.  When a column is clicked,
      a.  and there is an active game,
        i.    the current player's game piece is placed in the bottommost empty
              spot.
        ii.   the game checks if there is a winner,
          a.    and if there is
            i.    declares the winner,
            ii.   stops the game,
            iii.  dims the board,
            iv.   brightens the start button
          b.    and if there is not
            i.    it becomes the other player's turn,
            ii.   text indicates whose turn it is,
            iii.  appropriate-colored game piece appears above the middle column
      b.  and there is not an active game,
        i.    nothing happens.
4.  When the 'RESET' button is clicked,
      a.  and there is not an active game,
        i.    nothing happens.
      b.  and there is an active game,
        ii.   a popup box asks the player if they really want to reset the game,
          a.    and they do,
            i.    the game is reset.
          b.    and they do not,
            i.    nothing happens.

`App` handles the logic of the game:
(a) maintaining a 'state' (i.e. whose turn it is),
(b) checking for a winner after each piece is played,
(c)

`Display` is responsible for showing the data managed by `App` in the browser by
changing the text on the screen, displaying whose turn it is, and displaying a
winner.

`UI` is responsible for all of the things that the user can interact with, such as
(a) brightening/dimming the game board
(b) managing the game piece, including displaying the correct game piece depending
    on whose turn it is, and moving the game piece over the column where the mouse
    is
(c) showing a popup confirming the desire to reset the game


`EventHandlers` is responsible for the event handlers
