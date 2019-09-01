import React from 'react'
import styled from 'styled-components'
import { Panel, TabList, TabLink, Section, Container, Title } from 'bloomer'
import { Box, BoxTitle } from '../../../utils'
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
        <Box>
            <BoxTitle>
                <Title>
                    Timeline
                </Title>
            </BoxTitle>
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
        </Box>
    )
}

export default TravelTimeline