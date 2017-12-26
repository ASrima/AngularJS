var app=angular.module("SimpleApp", []);
app.controller("GameController",['$scope', function($scope){
	
	var words=["Amazing","cat","mat","rat","Excellent"];
	$scope.incorrectLetterChosen=[];
	$scope.correctLetterChosen=[];
	$scope.guesses=10;
	$scope.displayedWord='';
	$scope.input={
	letter:''
	}

	var selectRandomWord=function(){
		var index=Math.round(Math.random ()*words.length);
		return words[index];
	}
	var newGame=function(){
		//The game will start from scratch again
		$scope.incorrectLetterChosen=[];
		$scope.correctLetterChosen=[];
		$scope.guesses=10;
		$scope.displayedWord='';

		selectedWord=selectRandomWord();
		
		var tempDisplayWord='';
		for(i=0; i<selectedWord.length; i++){
			tempDisplayWord+='*';
		}
		$scope.displayedWord=tempDisplayWord;

		}
		$scope.letterChosen=function(){
			 for(var i = 0; i<$scope.correctLetterChosen.length; i++){
			 	if($scope.correctLetterChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			 		$scope.input.letter="";
			 		return;
			 	}
			 }
			 for(var i = 0; i<$scope.incorrectLetterChosen.length; i++){
			 	if($scope.incorrectLetterChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
			 		$scope.input.letter="";
			 		return;
			 	}
			 }
			var correct =false;
			for(var i =0; i<selectedWord.length; i++){
				if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
					$scope.displayedWord= $scope.displayedWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayedWord.slice(i+1);
					correct=true;
				}
			}
			if(correct){
				$scope.correctLetterChosen.push($scope.input.letter.toLowerCase());
			}else{
				$scope.guesses--;
				$scope.incorrectLetterChosen.push($scope.input.letter.toLowerCase());
			}
			$scope.input.letter="";
			if($scope.guesses==0){
				alert("You do not have any more guess trial left!")
			}
			if($scope.displayedWord.indexOf("*")==-1){
				alert("Excellent You did it ! Refresh the page again if you wanna try once more.")
			}
	
		}
		newGame();
		
}]);
