import React from 'react'
import styled from 'styled-components';
import CardHeader from './CardHeader';

const Card = ({title,children}) => {
    return (
        <CardWrapper>
            <CardHeader title={title}>
                <ButtonWrapper>
                    Nuevo viaje
                </ButtonWrapper>
            </CardHeader>
            {children}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display:block;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(14,30,37,.12) 0 2px 4px 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
    min-height: 400px;
`

const ButtonWrapper = styled.button`
    align-self: center;
    background-color: #00ad9e;
    border: 1px solid transparent;
    border-radius: 6px;
    box-shadow: rgba(14,30,37,.12) 0 2px 4px 0;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    line-height: 24px;
    margin-left: 16px;
    min-width: 168px;
    outline: 0;
    padding: 7px 15px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition-delay: 0s;
    transition-duration: .2s;
    transition-property: background-color,border,box-shadow,-webkit-box-shadow;
    transition-timing-function: ease;
    vertical-align: middle;
    width: auto;
    font-family:'Segoe UI';
    &:hover{
        background-color: #00c2b2;
        box-shadow: rgba(234,236,236,.16) 0 8px 12px 0,rgba(0,0,0,.08) 0 2px 8px 0;
    }
`

export default Card
