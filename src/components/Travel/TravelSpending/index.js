import React from 'react'
import styled from 'styled-components'
import { Table, TabList, TabLink, Section, Container, Title, Box } from 'bloomer'
import { FaHome, FaPlus } from 'react-icons/fa';

const TravelSpending = () => {
    return (
        <Box>
            <Title >
                Spending
            </Title>
            <Table isStriped isNarrow isFullWidth>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Spent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Accomodation</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>Transport</td>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <td>Food</td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td>Activities</td>
                        <td>1200</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>        
                        <th>12000</th>    
                    </tr>
                </tfoot>
            </Table>
        </Box>
    )
}

export default TravelSpending
