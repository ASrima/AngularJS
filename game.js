var app= angular.module('simple',[]);
app.controller("simpleController", ['$scope', function($scope){

	var word=["Metroclick","Remember","Things","Excellent"];
	$scope.incorrectGuess=[];
	$scope.correctGuess=[];
	$scope.guesses=6;
	$scope.displayword='';
	$scope.input={
		letter:''

	}
var selectRandomWord= function(){
	var index=Math.round(Math.random() *word.length);
	return word[index];
}

var newGame= function(){
	$scope.incorrectGuess=[];
	$scope.correctGuess=[];
	$scope.guesses=6;
	$scope.displayword='';
	selectedWord=selectRandomWord();
	var tempDisplayWord='';
	for(var i=0; i<selectedWord.length; i++){
		tempDisplayWord+='*';
		$scope.displayword=tempDisplayWord;
	}

}
$scope.letterChosen= function(){
		for(var i=0; i<$scope.correctGuess.length; i++){
			if($scope.correctGuess[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.input.letter='';
				return;
			}
		}
		for(var i=0; i<$scope.incorrectGuess.length; i++){
			if($scope.incorrectGuess[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.input.letter='';
				return;
			}
		}
		var correct= false;
		for(var i = 0; i<selectedWord.length;i++){
			if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
				$scope.displayword=$scope.displayword.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayword.slice(i+1)
				correct=true;
			}}
			if(correct){
				$scope.correctGuess.push($scope.input.letter.toLowerCase());
			}else{
				$scope.incorrectGuess.push($scope.input.letter.toLowerCase());
			}
		
		$scope.input.letter="";	
}
newGame();
}]); 