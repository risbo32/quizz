
const quizContainer = document.getElementById("quizz");
const resultsContainer  = document.getElementById("results");
const submitButton= document.getElementById("submit");

const myQuestions =[
	{
		question: "Qui est le premier president de l'Afrique du Sud ?",

		answers :{
			a:"Superman",
			b:"Terminator",
			c: "Nelson Mandela"
		}
,
		correctAnswer : "c"
	},

	{
		question:"Quel est la meilleure marque de laptop parmi ces marques ?",
		answers:{
			a:"Toshiba",
			b:"Dell",
			c:"Lenovo",
			d:"Pb-HEV"
		},
		correctAnswer: "b"
	},

	{
		question:"Quel parmi ces animaux celui qui miaule ?",
		answers:{
			a:"La vache",
			b:"Le Lion",
			c:"La chevre",
			d:"Le chameau",
			e:"Le coq",
			f:"Le chat"
		},
		correctAnswer:"f"
	}

	];
	
	
	


window.onload= function(){

	buidQuizz();

	submitButton.onclick= function(){
		showResults();
	};
};

function buidQuizz(){

	const output =[];

	myQuestions.forEach(

(currentQuestion , questionNumber) => {

	const answers = [];

	for(letter in currentQuestion.answers){
		answers.push(`<label>  
<input type= "radio" name="question${questionNumber}"
		value="${letter}" />
		${letter} :
		
		${currentQuestion.answers[letter]}
				</label>
				<br/>
			`);
	}

	output.push(
		`<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
		);

	quizContainer.innerHTML= output.join(' ');
}
		);

}

function showResults(){
	const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' question trouve(s) parmi  ' + myQuestions.length;
}