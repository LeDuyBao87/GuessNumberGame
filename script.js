let score = 20;
let highcore = 0;
let secretNum = parseInt((Math.random()*20).toFixed(0));
// let hightscore =

$('.check').click(function(event) {
	let myNum = parseInt($('#myNumber').val());
	console.log(myNum);
	console.log(secretNum);

	if(!myNum) {
		score--;
		if(score > 1){
			$('#score').html(score);
			$('#alertText').text('No number....');
		} else {
			$('#score').html('0');
			$('#alertText').text('You lost the game!!!');			
		}	
	} else

	if(myNum === secretNum){
		$('#score').html(score);
		$('#alertText').text('Congratulation!!!');
		$('#result').text(secretNum);
		$('body').css('backgroundColor', 'green');
		$('#myNumber').css('backgroundColor', 'green');

		if(score > highcore){
		$('#hightscore').text(score);
		};

		$('#result').text(secretNum);

	} 
	else if(myNum !== secretNum){
		if(score > 1){
			score--;
			let message = (myNum > secretNum) ? 'Too high!!!' : 'Too low!!!' ;
			$('#alertText').text(message);
			$('#score').html(score);
		} else {
			$('#score').html('0');
			$('#alertText').text('You lost the game!!!');
		}
	}
});

$('.again').click(function(event) {
	score = 20;
	secretNum = parseInt((Math.random()*20).toFixed(0));
	$('#result').text('?');
	$('#alertText').text('Start Guessing.....');
	$('#score').html(score);
	$('#myNumber').val('');
	$('body').css('backgroundColor', 'black');
	$('#myNumber').css('backgroundColor', 'black');
});



