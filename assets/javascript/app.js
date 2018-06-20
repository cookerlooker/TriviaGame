// STAGE 1: Initial Setup/ Display
// $(document).ready(function() {
//musicElement.setAttribute('src', 'assets/audio/drinkMe.mp3');
//Establish  Trivia Questions and their Boolean values (the answers)



var triviaQuestions = [{
	question: "What is the name of Alice's cat?",
	answerList: ["Ginger", "Chesire", "Dinah", "Grumpy"],
	answer: 2
},{
	question: "When Tweedledee and Tweedledum first meet Alice, what do they suggest they do? Which is not one of the suggestions?",
	answerList: ["A Battle", "Hide and Seek", "Button, button", "Dodge Ball"],
	answer: 3
},{
	question: "Alice In Wonderland' is based on a book by what author?",
	answerList: ["‎Lewis Carroll", "Tom Clancey", "Oscar Wilde", "Emily Dickinson"],
	answer: 0
},{
	question: "Where is the Queen's White castle?",	
	answerList: ["Edinburgh", "Balmoral", "Windsor", "Marmoreal"],
	answer: 3
},{
	question: "Where is Alice when she sees the white rabbit, earnestly checking his watch, again?",
	answerList: ["Up A Tree", "Attending her engagement party", "Down the rabbit hole", "At the tea party"],
	answer: 1
},{
	question: "Who said, You used to be much more...muchier. You've lost your muchness",
	answerList: ["The Hatter", "The Queen", "Tweedledee", "Thumblina"],
	answer: 0
},{
	question: " At the tea party, the Mad Hatter and the March Hare destroy what item belonging to the white rabbit?",
	answerList: ["A Bow Tie", "A Pocket Watch", "A Plaid Waist Coat", "Nothing"],
	answer: 1
},{
	question: "What does the cookie that Alice finds in the jar have written on it?",
	answerList: ["Share Me", "Nom Nom", "Take A Bite", "Eat Me"],
	answer: 3
},{
	question: " While Alice is up in the tree, what lesson is her sister trying to get her to pay attention to?",
	answerList: ["Botany", "Maths", "Political Science", "History"],
	answer: 3
},{
	question: "Where does Alice say cats and rabbits will live in her wonderland?",
	answerList: ["In Underground Holes", "Cool Cabins", "Fancy Little Houses", "With their mum's"],
	answer: 2
},{
	question: "In the flower garden, what is the Rose's child's name?",
	answerList: ["Bud", "Carnation", "Rose", "Posey"],
	answer: 0
},{
	question: "Which suit (of cards) is the Queen?",
	answerList: ["Clubs", "Spades", "Diamonds", "Hearts"],
	answer: 3
},{
	question: "According to the Queen of Hearts, people over what height are not permitted in the court?",
	answerList: ["12 tons", "A mile", "10 feet", "7 inches"],
	answer: 1
},{
	question: "Who just wanted to have a little trial for Alice?",
	answerList: ["The Wizard of Oz", "The King", "The Cat in the Hat", "The Queen"],
	answer: 1
},{
	question: "What was the name of the poem that the Cheshire Cat sang?",
	answerList: ["The Hunting", "Monster Moaning", "The Raven", "Jabberwocky"],
	answer: 3
},{
	question: "How tall is the Caterpillar?",
	answerList: ["3 Inches", "20 Feet", "10 Inches", "6 Feet"],
	answer: 0
},{
	question: "What is the first thing the Mad Hatter does to the White Rabbit's watch?",
	answerList: ["Winds it Up", "Smashes It", "Dunks It In Tea", "Checks The Time"],
	answer: 2
}];

//Declare correct and incorrect variables along with their corresponding gif images.
var wins = correctAnswer;
var losses = incorrectAnswer;
var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15', 'question16', 'question17'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "You're, right! Looks like you found your Much-ness!",
	incorrect: "Oh no, that's not it! you lost your Much-ness!",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you've done."
}

//Create a start button for the game.

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});


$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});



function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	$('#next').hide();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

// function nextQuestion(){
// 	$('#message').empty();
// 	$('#correctedAnswer').empty();
// 	$('#gif').empty();
// 	answered = true;
	
// 	//sets up new questions & answerList
// 	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
// 	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
// 	for(var i = 0; i < 4; i++){
// 		var choices = $('<div>');
// 		choices.text(triviaQuestions[currentQuestion].answerList[i]);
// 		choices.attr({'data-index': i });
// 		choices.addClass('thisChoice');
// 		$('.answerList').append(choices);
// 	}
// 	countdown();
// 	//clicking an answer will pause the time and setup answerPage
// 	$('.thisChoice').on('click',function(){
// 		userSelect = $(this).data('index');
// 		clearInterval(time);
// 		var answered = userSelect;
// 		answerPage();
// 	});
// }

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//a for loop to set up new questions & answerList with a countdown.
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		var answered = userSelect;
		answerPage();
	});
}


function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 3000);
	console.log(time);
	console.log("Hint: " + triviaQuestions[currentQuestion].answer)
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();
	// $('#next').show();


	//

	// var userAnswerText = userSelect;
	console.log(this.userSelect);
	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswer = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswer) && (answered == true)){
		var userAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
		console.log("The user picked: " + userSelect);
		console.log("The correct choice is: " + rightAnswer);
		console.log("Did the user answer? " + answered);
		console.log("The user answered: " + userAnswerText);
		correctAnswer++;
		console.log('The correct answer is: ' + rightAnswerText);
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswer) && (answered == true)){
		console.log("The user picked: " + userSelect);
		console.log("Did the user answer? " + answered);
		incorrectAnswer++;
		console.log('The correct answer is: ' + rightAnswerText);
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		console.log(messages.endTime);
		console.log("Did the user answer? " + answered);
		$('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
		answered = true;
				console.log('The correct answer is: ' + rightAnswerText);
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 10  * 1000)
		console.log(setTimeout);
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 10  * 1000);
		// clearInterval(newQuestion);
		console.log();
	}	
}



function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Press me to play again?');
}


// Source for questions/Answers: http://www.funtrivia.com/en/Movies/Alice-in-Wonderland-7156.html