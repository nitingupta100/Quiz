import React from "react"

export default function Questions(props){

    return(
        <div>
            Q1
           {props.data[0].q}
           <br></br>
           {props.data[0].a}
        </div>
    )
}

