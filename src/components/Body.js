import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withPromoted } from "./Cards";

const Body = () => {
    //const [listOfRes, setListOfRes] = useState(resObj);
    const [listOfRes, setListOfRes] = useState([]);
    //const [up, setUp] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const promotedRes = withPromoted(Cards);
    
    useEffect(() => {
        test1();
   }, []);

    const test1 = async function(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data1 =  await data.json();
      setListOfRes(data1?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(data1?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle);
    }
  

        return listOfRes.length === 0 ? (<Shimmer />):(
        <div className="">
            <div className="m-5">
                <input type="text" className="border-green-200 border-solid border-2 m-2 w-auto" placeholder="search here ..." value={searchItem} onChange={(e)=>{
                  setSearchItem(e.target.value);
                 
                }}/>
                
                <button className="rounded-lg bg-green-200 m-2 p-1" onClick={
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
                <button className="rounded-lg bg-green-200 m-2 p-1" onClick={() => {
                   const filtered = listOfRes.filter((x) => x.info.avgRating > 4.5);
                   setListOfRes(filtered);
                }}>
                    Top Restaurants in Bengaluru
                </button>
            </div>


            <div className="flex flex-wrap">
             {
            
            listOfRes.map((res) =>
             <Link key={res.info.id} to={"/restaurants/" + res.info.id}>

                    {console.log(res)}
                    {res?.info?.loyaltyDiscoverPresentationInfo?.badgeType ? (<promotedRes {...res} />) : (<Cards {...res}/>)}
                
             
            </Link>) 
             
             }
            </div>
        </div>
    );

};

export default Body;