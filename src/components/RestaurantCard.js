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
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg" 
        src={CDN_URL+cloudinaryImageId} alt="food-img" />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{totalRatingsString} Rating</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    )
  };


  //Higher Order Component

  //imput - Res Card ==>> Res Card Promoted

  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

  export default RestaurantCard;