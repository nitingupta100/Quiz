var q1 = {
    q:"what is the capital of Greece ? ",
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

function buildQuiz(questions){

    var quiz = document.querySelector("#quiz-questions")

    for (var i = 0; i < questions.length; i++){
        quiz.innerHTML = quiz.innerHTML + "<div>" + questions[i].q + "<br> </br>" + "</div>"
    }

}

buildQuiz(questions)