import styled from 'styled-components';

const Box = styled.div`
    box-shadow: rgba(14,30,37,.12) 0 2px 4px 0;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    color: #4a4a4a;
    display: block;
    margin-bottom: 1.5rem;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
`;

export const BoxTitle = styled.div`
    -webkit-box-align: center;
    -webkit-box-flex: 1;
    -webkit-box-pack: justify;
    align-items: center;
    background-color: #fff;
    display: flex;
    flex: 1 0 auto;
    justify-content: space-between;
    padding: 1rem;
    min-width: 100%;
    position: relative;
`;


export default Box


