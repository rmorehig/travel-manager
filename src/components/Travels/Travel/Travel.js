import React from 'react'
import styled from 'styled-components';

const Travel = ({name,date,days}) => {
    return (
        <TravelWrapper>
            <div>
                {`${name}`}
            </div>
            <div>
                {`${date}`}
            </div>
            <div>
                {`${days} días`}
            </div>
        </TravelWrapper>
    )
}

const TravelWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    div{
        padding: 0.5em 0.5em;
        width:25%;
    }
`

export default Travel
