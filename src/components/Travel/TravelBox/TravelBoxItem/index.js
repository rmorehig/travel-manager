import React from 'react'
import styled from 'styled-components'
import { Media, MediaLeft, Image, MediaContent, Column, Columns, LevelLeft, Subtitle, MediaRight, LevelItem,LevelRight, Control, Input, Button, Field, Title, Box } from 'bloomer'
import { FaHome, FaPlus, FaSearch } from 'react-icons/fa';
import { Level } from 'bloomer/lib/components/Level/Level';


const TravelBoxItem = (props) => {
    const { name, comment, img, city, date } = props
    return(
        <Column isSize='1/2'>
            <Media isSize='large'>
                <MediaLeft>
                    <Image isSize='96x96' src={img} />
                </MediaLeft>
                <MediaContent>
                    <Columns>
                        <Column>
                            <p>
                                <strong>{name}</strong> <small>{city}</small>
                                <br/>
                                {comment}
                            </p>
                        </Column>
                        <Column isSize='1/4'>
                            <p>
                                {date}
                            </p>
                        </Column>
                    </Columns>
                </MediaContent>
                <MediaRight></MediaRight>
            </Media>
        </Column>
    )
}

export default TravelBoxItem