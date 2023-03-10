// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from '../constant';
import Shimmer from "../Shimmer";
import useRestraunt from "./utils/useRestraunt";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const restaurantInfo = useRestraunt(resId);

    
    return (!restaurantInfo) ? <Shimmer /> : (
        <div className="resInfo">
            <div>
                <h2 className="mt-0 text-4xl font-medium leading-tight text-primary bg-pink-500 mb-5">
                    {restaurantInfo.name}
                    <span className="text-xs pl-5">Restaurant Id : {resId}</span>
                </h2>
                <img alt="restaurant" src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
                <h3>{restaurantInfo.area}</h3>
                <h3>{restaurantInfo.city}</h3>
            </div>
            <div className="menu">
                <h1>Menu</h1>
                <ol>
                    {Object.values(restaurantInfo?.menu?.items).map((item) => <li key={item?.id}>{item?.name}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default RestaurantMenu;