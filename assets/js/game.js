$(document).ready(function(){

function setUpBoard() {

	var whiteScore = 2;
	var blackScore = 2;

	for (x=1; x<9 ; x++ ) {
		for (i=1; i < 9; i++) {
		 	if (x % 2 === 0) {
				if (i % 2 === 0){
				$('.board-row').append("<div class='green-square' id='" + x +  i  + "'> " +  x + "," + 	i + "  </div>");
			} else {
				$('.board-row').append("<div class='black-square' id='" + x +  i  + "'> " + x +  "," + i + " </div>");
			}
		} else {
			
				if (i % 2 === 0){
						$('.board-row').append("<div class='black-square' id='"+ x + i + "'> " + x +  "," + i + " </div>");
					} else {
						$('.board-row').append("<div class='green-square' id='" + x + i + "'> " + x +  "," + i + " </div>");
					}
				}		
		}; // end of inner for loop
			$('.board-row').append("<br>")
	};  // end of outer for loop

	// place inital pieces on the board
		$('#45').append("<div class='white-chip'> </div>" );
		$('#54').append("<div class='white-chip'> </div>" );
		$('#44').append("<div class='black-chip'> </div>" );
		$('#55').append("<div class='black-chip'> </div>" );

		// init score 
		$('#white-score').text("White Score:" + whiteScore);
		$('#black-score').text("Black Score:" + blackScore);
} // end of setUpBoard Function 

setUpBoard();

$(".board-row").on("click", function(e) {
	console.log(e.target);
	$(e.target).append("<div class='black-chip'> </div>" );
});

});   // End of Document Ready