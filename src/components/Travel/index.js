import React from 'react'
import TravelTimeline from './TravelTimeline';
import { Panel, TabList, TabLink, Section, Container, Box } from 'bloomer'
import TravelSpending from './TravelSpending';
import TravelRestaurants from './TravelRestaurants';
import TravelAccomodation from './TravelAccomodation';
import TravelActivities from './TravelActivities';
import styled from 'styled-components'
import { Title } from '../../utils';

const Travel = (travel) => {
    const { cities, name } = travel[0]
    return (
        <ContainerWrapper className='is-fullhd'>
            <Title>
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