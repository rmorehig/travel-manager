import React from 'react'
import styled from 'styled-components'
import { Panel, TabList, TabLink, Section, Container, Title, Box } from 'bloomer'
import { FaHome, FaPlus } from 'react-icons/fa';

const renderTravelTimelineItem = (cities) => (
    cities.map( (c,index) => {
        const { date, city } = c
        return(
            <div class="step-item is-active">
                 <a href='#'>
                    <div class="step-marker">
                    {++index}
                    </div>
                </a>
                <div class="step-details">
                    <p class="step-title">{city}</p>
                    <p>{date}</p>
                </div>
            </div>
        )
    })
)

const TravelTimeline = ({cities}) => {
    return(
        <BoxWrapper>
            <Title>
                Timeline
            </Title>
            <div className="steps">
                {renderTravelTimelineItem(cities)}
                <div class="step-item">
                    <div class="step-marker ">
                        <FaPlus />
                    </div>
                    <div class="step-details">
                        <p class="step-title">New step</p>
                    </div>
                </div>
            </div>
        </BoxWrapper>
    )
}

const BoxWrapper = styled(Box)`
    
`
export default TravelTimeline