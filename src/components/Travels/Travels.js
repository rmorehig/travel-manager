import React from 'react'
import styled from 'styled-components';
import Card from '../Card';
import Travel from './Travel/Travel';

const list = [
    {
        name: 'Asturias y Cantabria',
        date: '07/09/2019',
        days: 12
    },
    {
        name: 'Costa Rica',
        date: '06/12/2019',
        days: 10
    }
]

const Travels = () => {
    return (
        <Card title='Mis viajes'>
            <TravelsWrapper>
                <ul>
                    {list.map(item => {
                        return(                
                            <a href='localhost:3000'>
                                <li>
                                    <Travel {...item} />
                                </li>
                            </a>  
                        )
                    })}
                </ul>
            </TravelsWrapper>
        </Card>
    )
}

const TravelsWrapper = styled.div`
    ul {
        list-style: none;
        margin:0;
        padding:0;
        text-align: left;
    }
    a{
        text-decoration: none;
        li{
            &:hover {
                background-color: #F3F4F4;
            }
        }
    }
`

export default Travels
