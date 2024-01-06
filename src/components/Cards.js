import { RESIMG } from "../utils/constants";

const Cards = (props) => {
    const {...res} = props;
    const {cloudinaryImageId, name, avgRating, id} = res?.info;
    return(
        <div className="w-64 m-5 h-80 hover:scale-110 hover:border-gray-200 hover:shadow-lg">
            <img className="w-44 rounded-lg" src={RESIMG+cloudinaryImageId} alt="Restaurant Logo" />
            <h3 className="mt-2 font-bold">{name}</h3>
            <h4 className="mt-2">{avgRating}</h4>
        </div>
    );
};

export default Cards;