import React from 'react'
import TravelBox from '../TravelBox';
import restaurants from '../../../shared/restaurants';


const TravelAccomodation = () => {
    return (
       <TravelBox title='Accomodation' data={restaurants} />
    )
}

export default TravelAccomodation