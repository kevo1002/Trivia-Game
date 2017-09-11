
	var number = 60;
	var intervalId;

$(".startButton").click(function () {
		startTimer();
		startGame();

	});

	function startTimer() {
		intervalId = setInterval(decrement, 1000);

		$(".timer").html("<h3>Time remaining: " + number + " seconds</h3>");

	}
	function decrement() {
		number--;

		$(".timer").html("<h3>Time remaining: " + number + " seconds</h3>");

		// Starts gameOver function
		if (number === 0) {
			gameOver();
		}

	}
	function gameOver() {
		// Stops Counter
			clearInterval(intervalId);
		}

	$(".submitButton").click(function(){
		gameOver();
		check();
		$("#number_correct").alert = "You got " + correct + " correct.";
	});

	function check(){

	var question1 = $("#question1").value;
	var question2 = $("#question2").value;
	var question3 = $("#question3").value;
	var correct = 0;


	if (question1 == "5") {
		correct++;
}
	if (question2 == "11") {
		correct++;
}	
	if (question3 == "1331") {
		correct++;
	}
	
	}

	function startGame(){
		document.getElementById("quiz").style.visibility = "visible";
		document.getElementById("sButton").style.visibility = "visible";	
	}
