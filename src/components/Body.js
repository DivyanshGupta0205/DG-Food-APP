import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();

  console.log(json);
  setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return (<h1>Looks like you are offline!! Please check your internet</h1>)

// Conditional Rendering
// if(listOfRestaurant.length === 0)
// return <Shimmer />;



    return listOfRestaurant.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value ={searchText} onChange={(e)=> {
              setSearchText(e.target.value);
            }} />
            <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
              // Filter the rest. and update the UI
              const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant);
            }}>Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-1 bg-gray-100 rounded-lg" 
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5);
              setListOfRestaurant(filteredList);
              console.log(filteredList);
          }}>Top Rated Restaurants
          </button>
          </div>
          </div>
        <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to = {"/restaurants/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
          ))}
        </div>
      </div>
    )
  };

  export default Body;