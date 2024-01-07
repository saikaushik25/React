import { RESIMG } from "../utils/constants";
const ItemList = ({items})=> {
    //const [showItems, setShowItems] = useState();

    console.log(items);
    return <div>
            {
            items.map((item) => 
                <div className="p-2 m-2">
                    <div>
                <img src={RESIMG + item.card.info.imageId} className="w-14 float-right"></img> 
                <div><button className="float-right shadow-lg my-12 bg-gray-200 -mx-14 text-green-400  pl-2 border-2 border-green-400 rounded-lg text-center top-full left-1/2">Add +</button></div>
                </div>
                <div className="flex font-bold mt-2 w-3/4">
                    <span>{item.card.info.name}</span>
                    <span>- ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs italic border-b-2 pb-6 mr-2">{item.card.info.description}</p>
                
                </div>
            )
            }
            
        </div>
};

export default ItemList;