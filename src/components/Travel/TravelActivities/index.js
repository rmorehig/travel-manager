import React from 'react'
import TravelBox from '../TravelBox';
import restaurants from '../../../shared/restaurants';

const TravelActivities = () => {
    return (
        <TravelBox title='Activities' data={restaurants} />
    )
}

export default TravelActivities