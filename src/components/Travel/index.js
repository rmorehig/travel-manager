import React from 'react'
import TravelTimeline from './TravelTimeline';
import { Panel, TabList, TabLink, Section, Container, Title, Box } from 'bloomer'
import TravelSpending from './TravelSpending';
import TravelRestaurants from './TravelRestaurants';
import TravelAccomodation from './TravelAccomodation';
import TravelActivities from './TravelActivities';
import styled from 'styled-components'

const Travel = (travel) => {
    const { cities, name } = travel[0]
    return (
        <ContainerWrapper className='is-fullhd'>
            <Title isSize={1}>
                {name}
            </Title>
            <TravelTimeline cities={cities}/>
            <TravelAccomodation />
            <TravelActivities />
            <TravelRestaurants />
            <TravelSpending cities={cities}/>
        </ContainerWrapper>
    )
}

const ContainerWrapper = styled(Container)`
    max-width: 1000px;
`

export default Travel