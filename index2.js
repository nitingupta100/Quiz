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
function buildQuiz(questions){

    var quiz = document.querySelector("#quiz-questions")

        //quiz.innerHTML = <input type ="text"/>

    // input = document.createElement('input')
    // input.innerHTML = "type='textbox"
    // console.log(input)

    for (var i = 0; i < questions.length; i++){
        
        var j = i + 1
        quiz.innerHTML = quiz.innerHTML + "<div>" + "<div class='question' >" + questions[i].q +"</div>" + "<div class='answer' >"+ "<input id='a"+ j +"'" + "type='text'>"+ "</div>" + "<div class='check'>"+"<button id='b" + j + "' onclick='check(event)'" + ">Check</button>"  + "</div>" + "</div>"
        console.log(quiz.innerHTML)
    }
}

buildQuiz(questions)

var score = 0
function check(e){

    if (e.srcElement.id==='b1'){
        console.log(e.srcElement.id)

        var ans = document.getElementById('a1')
        console.log(ans)
        console.log(ans.value)
        console.log(questions[0].a)

        if (ans.value === questions[0].a){
            alert("correct")
            score = score + 1
            document.querySelector('h2').innerText = "Score: " + score
        }
        else {
             alert('wrong')
        }

    }

    if (e.srcElement.id==='b2'){

        var ans = document.querySelector('#a2')

        if (ans.value ===questions[1].a){
            alert("correct")
            score = score + 1
            document.querySelector('h2').innerText = "Score: " + score

        }
        else {
             alert('wrong')
        }

    }

    if (e.srcElement.id==='b3'){

        var ans = document.querySelector('#a3')

        if (ans.value ===questions[2].a){
            alert("correct")
            score = score + 1
            document.querySelector('h2').innerText = "Score: " + score

        }
        else {
             alert('wrong')
        }

    }
    
    
}

