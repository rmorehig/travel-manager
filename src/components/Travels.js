import React from 'react'
import styled from 'styled-components';

const list = [
    {
        name: 'Asturias y Cantabria',
        date: '07/09/2019'
    },
    {
        name: 'Costa Rica',
        date: '06/12/2019'
    }
]

const Travels = () => {
    return (
        <TravelsWrapper>
            
            <h2>
                Mis viajes
            </h2>
            <ul>
                {list.map(item => {
                    const { name, date } = item
                    return(                
                        <a href='localhost:3000'>
                            <li>
                                <p>
                                    {`${name} - ${date}`}
                                </p>
                            </li>
                        </a>  
                    )
                })}
            </ul>
        </TravelsWrapper>
    )
}

const TravelsWrapper = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(14,30,37,.12) 0 2px 4px 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
    min-height: 400px;
    h2{
        padding: 0.5em 2em;
        border-bottom: 2px solid #F3F4F4;
        margin-right: 1em;
        margin-left: 1em;
        margin-bottom: 1em;
    }
    ul {
        list-style: none;
        margin:0;
        padding:0;
        text-align: left;
    }
    a{
        text-decoration: none;
        li{
            padding: 12px 0em 12px 0;
            &:hover {
                background-color: #F3F4F4;
            }
            p{
                margin-left: 1em;
            }
        }
    }
`
export default Travels
