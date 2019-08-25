import React from 'react'
import styled from 'styled-components';

const CardHeader = ({title,children}) => {
    return (
        <CardHeaderWrapper>
            <h2>
                {title}
            </h2>
            {children}
        </CardHeaderWrapper>
    )
}

const CardHeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 0.5em 0.5em;
    border-bottom: 2px solid #F3F4F4;
    margin-right: 1em;
    margin-left: 1em;
    margin-bottom: 1em;
`

export default CardHeader
