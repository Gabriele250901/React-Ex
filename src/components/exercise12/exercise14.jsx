import React from "react";
import { Counter } from "./exercise12";


export class CounterDisplay extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <Counter  initialValue={10} timeout={2000} increment={3}/>
            </div>
        )
    }
}