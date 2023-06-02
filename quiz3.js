// 1. Get the quiz data or array getData()
// 2. Show the question to the user showQuestion()
// 3. checkAnswer()  if answer is right then show the next question

var q1 = {
    q:"What is the capital of Greece ? ",
    a:"Athens"
}

var q2 = {
    q: "What is the capital of England ? ",
    a:"London"
}
var q3 ={
    q: "What is the capital of Thailand ? ",
    a: "Bangkok"
}

var questions = [q1,q2,q3]
var currentQuestion = 0;
var score = 0;

 var checkAnswer=()=>{
    var answer = document.querySelector('input').value
    emoji = document.getElementById('reaction')

    if (answer === questions[currentQuestion].a){
        emoji.innerHTML ="right"
        score = score + 1
        currentQuestion ++
        //showQuestion();
    }
    else {
        emoji.innerHTML ="wrong"

    }

    
}

function showQuestion(){

    var question = questions[currentQuestion].q
    var input_answer = "<input   type='text' />"
    var check_answer = "<button onclick='checkAnswer()' >Check</button>"
    var reaction = "<span id='reaction'></span>"

    var show_question = document.querySelector('#quiz-questions')

    show_question.innerHTML = "<div> <div>" + question + "</div> <div class='answer'>" + input_answer + "</div> <div class='check'>" + check_answer + reaction +"</div> </div>"
    console.log(show_question)
}


showQuestion()

