import React from 'react'

const PlayerCard = (props) => {
    return(
        <div>
            <p><span>Name:</span> {props.name}</p>
            <p><span>Country:</span> {props.country}</p>
            <p><span>Searches:</span> {props.searches}</p>
        </div>
    )
}

export default PlayerCard