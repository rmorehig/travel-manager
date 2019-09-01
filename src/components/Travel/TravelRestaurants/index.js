import React from 'react'
import TravelBox from '../TravelBox';
import restaurants from '../../../shared/restaurants';


const TravelRestaurants = () => {
    return (
       <TravelBox title='Restaurants' data={restaurants} />
    )
}

export default TravelRestaurants
