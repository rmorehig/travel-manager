import React from 'react'
import styled from 'styled-components';

const Main = ({children}) => {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    padding:2rem;
    min-height: calc(100% - 50px);
`
export default Main
