import { useState } from "react";
import ItemList from "./ItemList";

// Code below helps user to expand/collapse a card on click on a category

const Category = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handle= () =>{
        setShowItems(!showItems);
    };

    console.log(data);
    return (
        <div className="w-6/12 mx-auto my-4 shadow-lg text-center bg-gray-100 cursor-pointer m-2 p-2">
                <div className="flex justify-between" onClick={handle}>
                <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
                <span className="text-gray-700 font-bold">V</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}

//Code below helps to collpae automatically if user clicks on another categories
// const Category = ({data, index, showItems, setShowIndex}) => {

//     //const [showItems, setShowItems] = useState(false);

//     const handle= () =>{
//         setShowIndex();
//     };

//     console.log(data);
//     return (
//         <div className="w-6/12 mx-auto my-4 shadow-lg text-center bg-gray-100 cursor-pointer m-2 p-2">
//                 <div className="flex justify-between" onClick={handle}>
//                 <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
//                 <span className="text-gray-700 font-bold">V</span>
//                 </div>
//                 {showItems && <ItemList items={data.itemCards} />}
//         </div>
//     )
// }

export default Category;