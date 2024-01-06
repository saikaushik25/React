import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import React from "react";
import Item from "./Item";
import Shimmer from "./Shimmer";


class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resInfo: [],
        }
        
    }
    async componentDidMount(){
        console.log("Component Did Mount used for API calls");
        const data2 = await fetch (MENU_API+65797);
        const json = await data2.json();
        this.setState({
            resInfo: json,
        });
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info?.name);  
        //const {name} = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info;
        //console.log(name);

    }
    
    render() {
        const k = this.state.resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info?.name;
        //console.log(k);
        if(this.state.resInfo === null) return <Shimmer />;
      //  const {itemCards} = this.state.resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        
        return (
            <Item Name={k} />
            //<Item Name={this.state.resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info.name} />
        )
    }
}

export default Cart;