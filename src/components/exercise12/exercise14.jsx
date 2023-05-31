import React from "react";
import { Counter } from "./exercise12";


export class CounterDisplay extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <h1>Count:{this.props.count}</h1>
            </div>
        )
    }
}