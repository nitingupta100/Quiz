var readConsole = require('readline-sync')
console.log("This is quiz on capital cities")

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
var score = 0

function test(q,a){

    var answer = readConsole.question(q)
    if (answer === a){
        console.log ("Right")
        score++
        console.log(score)
    }
    else {
        console.log("Wrong")
    }

}

for (var i=0; i < questions.length; i++){
    test(questions[i].q,questions[i].a)
}

//console.log(score)