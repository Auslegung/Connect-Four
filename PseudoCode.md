
If user clicks the start button, the 

If the mouse hovers over a column, that column is highlighted very slightly, and playerQ's colored piece appears above the column to indicate to the user which selection they are about to make.

If a column is clicked, place the relevant piece in the bottommost empty slot.  Piece is dropped from the top using a timer thing we learned in advanced css stuff on I think Friday.  Also use image maps for click events on the image https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map.

Every column has a dataid=0.  Each time a column is clicked, increment this.dataid, that way the logic knows where that piece went, and update the array to reflect this.  When the column is clicked, the 2d array will be modified like so: arr[5-columnDataId][columnNum] = playerQ, where columnNum is the number of the column from left to right, 0-6, retrieved from the image map, and columnDataId is an html data id set to each column as mapped by image map.

After a column is clicked, check if the recently placed piece makes 4 consecutive pieces, horizontally, vertically, NW-SE or NE-SW.  If there is, wait 1/2 second and declare that the previous player is the winner.
