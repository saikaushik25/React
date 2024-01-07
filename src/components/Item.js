import { Component } from "react";

class Item extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Name:{this.props.Name}</h1>
            </div>
        )
    }
}

export default Item;