function check(e){

    if (e.srcElement.id==='b1'){
        console.log(e.srcElement.id)

        var ans = document.querySelector('#a1')

        if (ans.value ==='london'){
            alert("correct")
        }
        else {
             alert('wrong')
        }

    }

    if (e.srcElement.id==='b2'){

        var ans = document.querySelector('#a2')

        if (ans.value ==='athens'){
            alert("correct")
        }
        else {
             alert('wrong')
        }

    }

    if (e.srcElement.id==='b3'){

        var ans = document.querySelector('#a3')

        if (ans.value ==='bangkok'){
            alert("correct")
        }
        else {
             alert('wrong')
        }

    }
    
    
}

