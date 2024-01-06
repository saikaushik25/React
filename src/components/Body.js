import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //const [listOfRes, setListOfRes] = useState(resObj);
    const [listOfRes, setListOfRes] = useState([]);
    //const [up, setUp] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    
    useEffect(() => {
        test1();
   }, []);

    const test1 = async function(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data1 =  await data.json();
      setListOfRes(data1?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  
        
        return listOfRes.length === 0 ? (<Shimmer />):(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="search here ..." value={searchItem} onChange={(e)=>{
                  setSearchItem(e.target.value);
                 
                }}/>
                
                <button className="check" onClick={
                    ()=>{
                        
                        const f = listOfRes.filter((z) => {
                            if(searchItem === ""){
                                return z;
                            }
                            else {
                            //console.log(test1());
                          return z.info.name.toLowerCase().includes(searchItem.toLowerCase());
                            }
                        });
                        
                        
                        setListOfRes(f);
                }  
                }>Search</button>
                
            </div>
            <div className="filter">
                <button className="filtered" onClick={() => {
                   const filtered = listOfRes.filter((x) => x.info.avgRating > 4.5);
                   setListOfRes(filtered);
                }}>
                    Top Restaurants in Bengaluru
                </button>
            </div>


            <div className="cards">
             {
            
            listOfRes.map((res) =>
             <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
             <Cards {...res}/>
            </Link>) 
             
             }
            </div>
        </div>
    );

};

export default Body;