import React from 'react'
import styled from 'styled-components'
import { Media, MediaLeft, Image, MediaContent, Column, Columns, LevelLeft, Subtitle, MediaRight, LevelItem,LevelRight, Control, Input, Button, Field, Title, Box } from 'bloomer'
import { FaHome, FaPlus, FaSearch } from 'react-icons/fa';
import { Level } from 'bloomer/lib/components/Level/Level';

const restaurants = [
    {
        name: 'El Roxin',
        city: 'Llanes',
        date: '12/09/2019',
        img: 'https://lh5.googleusercontent.com/p/AF1QipMmhUMA48Zupc4HRVmxN3gMCmrast2zFQpCtYcF=w213-h160-k-no',
        comment: 'Un restaurante de casería con carta 100% libre de gluten'
    },
    {
        name: 'Siedrería Casa Niembro',
        city: 'Asiegu',
        date: '12/09/2019',
        img: 'https://lh5.googleusercontent.com/p/AF1QipMmhUMA48Zupc4HRVmxN3gMCmrast2zFQpCtYcF=w213-h160-k-no',
        comment: 'Un restaurante de casería con carta 100% libre de gluten '
    }
]


const renderRestaurants = (restaurants) => (
    restaurants.map( restaurant => {
        const { name, comment, img, city, date } = restaurant
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
    })
)

const TravelActivities = () => {
    return (
        <Box>
            <Title >
                Activites
            </Title>
            <Level>
                <LevelLeft>
                    <LevelItem>
                        <Field hasAddons>
                            <Control>
                                <Input placeholder='Find activity' />
                            </Control>
                            <Control>
                                <Button>
                                    <FaSearch />
                                </Button>
                            </Control>
                        </Field>
                    </LevelItem>
                </LevelLeft>
                <LevelRight>
                    <LevelItem><Button isColor='primary'>Add</Button></LevelItem>
                </LevelRight>
            </Level>
            <Columns isMultiline>
                {renderRestaurants(restaurants)}
            </Columns>
        </Box>
    )
}

export default TravelActivities