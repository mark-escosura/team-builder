import React from 'react'

function TeamMembers(props){
    const {details} = props

    if(!details){
        return <h3> Working on fetching your info </h3>
    }

    return (
        <div className='member-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default TeamMembers;