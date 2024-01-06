import { RESIMG } from "../utils/constants";

const Cards = (props) => {
    const {...res} = props;
    const {cloudinaryImageId, name, avgRating, id} = res?.info;
    return(
        <div className="card">
            <img className="charger" src={RESIMG+cloudinaryImageId} alt="Restaurant Logo" />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default Cards;