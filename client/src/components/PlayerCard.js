import React from 'react'
import styled, {keyframes} from 'styled-components'
import {flipInY} from 'react-animations'

const flipAnim = keyframes`${flipInY}`

let test = `1000ms`

const Card = styled.div`
    animation-duration: ${test};
    animation-name: ${flipAnim};
    display: flex;
    flex-direction: column;
    margin: 15px;
    width: 200px;
    height: 130px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 5px;
    color: gray;
    span{
        font-weight: bold;
        color: darkgreen;
    }

`

const PlayerCard = (props) => {

    test = `${props.id}ms`

    return(
        <>
        <Card>
            <p><span>Name:</span> {props.name}</p>
            <p><span>Country:</span> {props.country}</p>
            <p><span>Searches:</span> {props.searches}</p>
        </Card>
        </>
    )
}

export default PlayerCard