import React from 'react'
import heading from '../../assets/heading-img.png'
import './Heading.css'
const Heading = ({title,alt}) => {
    return (
        <div className="heading">
            <img src={heading} alt={alt}/>
            <h2>{title}</h2>
        </div>
    )
}

export default Heading
