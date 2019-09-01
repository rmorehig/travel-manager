import React from 'react'
import styled from 'styled-components'
import { Media, MediaLeft, Image, MediaContent, Column, Columns, LevelLeft, Subtitle, MediaRight, LevelItem,LevelRight, Control, Input, Button, Field, Title } from 'bloomer'
import { FaHome, FaPlus, FaSearch } from 'react-icons/fa';
import { Level } from 'bloomer/lib/components/Level/Level';
import TravelBoxItem from './TravelBoxItem';
import { Box, BoxTitle } from '../../../utils'
const TravelBox = (props) => {
    const { title, data} = props
    return (
        <Box>
            <BoxTitle>
            <div>
            <Title >
                {title}
            </Title>
            </div>     
                <div>
                    <Button isColor='primary'>
                        {`Add ${title.toLowerCase()}`}
                    </Button>
                </div>
            </BoxTitle>
            <div>
                {data.map(item => <TravelBoxItem {...item} />)}
            </div>
        </Box>
    )
}

export default TravelBox