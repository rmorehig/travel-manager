import React from 'react'
import travels from '../shared/travels'
import { FaPlaneDeparture } from 'react-icons/fa'
import { Container } from 'bloomer/lib/layout/Container';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { Card } from '../utils';

const TravelList = () => {
    return (
        <div className='container is-fullhd'>
            <h1 class="title">
                My trips
            </h1>
            {renderTravels(travels)}
        </div>
    )
}

const renderTravels = (travels) => (
    <div className='columns'>
        {travels.map( travel => 
            <Travel {...travel} />
        )}
        <div className='column is-one-quarter'>
            <Card>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <Link to='/travel'>
                                <p class="title is-4">New trip</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
)

const renderPeople = (people) => {
    return(
            people.map(function(item, index) {
              return <span key={`people_${index}`}>{ (index ? ' ' : '') + `@${item}` }</span>;
            })
    )
}

const Travel = (props) => {
    const { name, date, description, people, img } = props
    return(
        <div className='column is-one-quarter'>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={img} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <Link to='/travel'>
                                    <p class="title is-4">{name}</p>
                                </Link>
                                <p class="subtitle is-6">{renderPeople(people)}</p>
                            </div>
                        </div>
                        <div class="content">
                            {description}        
                        </div>
                        <div class="content">
                            <time datetime="2016-1-1">
                                {date}
                            </time>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default TravelList
