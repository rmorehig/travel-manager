import React from 'react'
import styled from 'styled-components'
import { Media, MediaLeft, Image, MediaContent, Column, Columns, LevelLeft, Subtitle, MediaRight, LevelItem,LevelRight, Control, Input, Button, Field, Title, Box } from 'bloomer'
import { FaHome, FaPlus, FaSearch } from 'react-icons/fa';
import { Level } from 'bloomer/lib/components/Level/Level';
import TravelBoxItem from './TravelBoxItem';

const TravelBox = (props) => {
    const { title, data} = props
    return (
        <Box>
            <Level>
            <LevelLeft>
            <Title >
                {title}
            </Title>
            </LevelLeft>
                    <LevelRight>
                        <LevelItem>
                            <Field hasAddons>
                                <Control>
                                    <Input placeholder={`Find ${title.toLowerCase()}`} />
                                </Control>
                                <Control>
                                    <Button>
                                        <FaSearch />
                                    </Button>
                                </Control>
                            </Field>
                        </LevelItem>
                        <LevelItem>
                            <Button isColor='primary'>
                                Add
                            </Button>
                        </LevelItem>
                    </LevelRight>
                
            </Level>
            <Columns isMultiline>
                {data.map(item => <TravelBoxItem {...item} />)}
            </Columns>
        </Box>
    )
}

export default TravelBox