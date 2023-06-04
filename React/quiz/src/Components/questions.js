import React from "react"

export default function Questions(props){

    function check(e){
        console.log(e.target.id)
        //console.log({"'"  + props.ques.id +"'"})
        var ans = document.getElementById("a"+e.target.id[1]).value
        console.log(ans)
        console.log(props.ques.a)
        if (ans===props.ques.a){
            alert("OK")
        }
    }

    return(
        <div>
            Q{props.ques.id}
           {props.ques.q}
           <br></br>
           <input type ='text' id={"a" + props.ques.id}></input>
           <br></br>
           <button id={"b"+ props.ques.id} onClick={(e)=>check(e)}>Check</button>
        </div>
    )
}

