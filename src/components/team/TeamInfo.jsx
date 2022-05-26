import React from 'react'

const TeamInfo = ({ img, name, alt }) => {
    return (
        <div className="col">
            <img src={img} alt={alt} />
            <h3>{name}</h3>
        </div>
    )
}

export default TeamInfo