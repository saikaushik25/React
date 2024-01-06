import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);
    //fetch data
    useEffect(()=> {
        test3();
    },[]);

    const test3 = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        setresInfo(json.data);
    }

    return resInfo;
}

export default useMenu;