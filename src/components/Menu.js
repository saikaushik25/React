import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
//import useMenu from "../utils/useMenu";
import useMenu from "../utils/useMenu";

const Menu = () => {
    //const [resInfo, setresInfo] =useState(null);
    const {resId} = useParams();
    const resInfo = useMenu(resId);
    //const resInfo = useMenu(resId);
    // console.log(resId);
    // useEffect(() => {
    //     test2();
    // },[]);
    
    // const test2 = async ()=>{
    //     const datamenu = await fetch(MENU_API + resId);
    //     const datanew =  await datamenu.json();
    //     console.log(datanew);
    //     setresInfo(datanew.data);
    //   }; 
      if(resInfo === null) return <Shimmer />;
      console.log(resInfo);
      const {name, cuisines} = resInfo?.cards[0]?.card?.card?.info;
      console.log(name);
      const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      return (
        <div>
        <h1 className="font-bold py-3 bg-yellow-200">{name}</h1>
        <h3 className="bg-blue-100 p-2">{cuisines.join(", ")}</h3>
        <h2 className="font-bold bg-red-100 p-2">Menu</h2>
        <ul>
            {itemCards && itemCards.map((item) => <li className="bg-green-200 border-b-2" key={item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li> )}
        </ul>
        </div>
      
    
    )
}

export default Menu;