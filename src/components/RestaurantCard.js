import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

//  const delTime = resData?.sla?.deliveryTime;
//   console.log(delTime);

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      totalRatingsString,
      sla
    } = resData?.info;
  
    return (
      <div className="res-card">
        <img className="res-logo" src={
            CDN_URL+cloudinaryImageId
          } alt="food-img" />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{totalRatingsString} Rating</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    )
  };

  export default RestaurantCard;