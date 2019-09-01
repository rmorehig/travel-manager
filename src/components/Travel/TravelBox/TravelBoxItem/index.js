import React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa';


const TravelBoxItem = (props) => {
    const { name, comment, img, city, date } = props
    return(
        <TravelBoxItemWrapper>
                <div className='image'>
                    <img isSize='96x96' src={img} />
                </div>
                    <div className='description'>
                        <div>
                            <div>
                            <a><strong>{name}</strong></a><small><FaMapMarkerAlt />{city}</small>
                            </div>
                            {comment}
                        </div>
                   
                    <div className='date'>
                        <div>
                            {date}
                        </div>
                    </div>
                    </div>
        </TravelBoxItemWrapper>
    )
}

const TravelBoxItemWrapper = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    font-size: 10pt;
    position: relative;
    padding: 1.25rem;
    .description{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        strong{
            font-size: 12pt;
        }
    }
    .image{
        -webkit-box-align: center;
        -webkit-box-pack: center;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-family: Arial,Helvetica,sans-serif;
        font-size: 10pt;
        font-stretch: normal;
        font-style: normal;
        font-variant-caps: normal;
        font-variant-east-asian: normal;
        font-variant-ligatures: normal;
        font-variant-numeric: normal;
        font-weight: 400;
        height: 96px;
        justify-content: center;
        line-height: 12pt;
        margin-right: 24px;
        min-width: 96px;
        overflow: hidden;
        width: 96px;
        img {
            border-radius: 5px;
        }
        
    } 
    .date{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 0px;
    }
    :hover{
        background: #F3F4F4;
    }
`
export default TravelBoxItem