import React from 'react'
import Heading  from '../heading/Heading'
import './Facility.css'
const Facility = ({data}) => {
    return (
        <section className="facility">
            <div className="facility_container container">
                <Heading  title='Our Facility' alt='Facility'/>
                <div className="facility_content">
                    <div className="facility_cols">
                        {data.map((fac, index) => {
                            return (
                                <div className="col" key={index}>
                                    <img src={fac.img} alt={fac.alt} />
                                    <h3>{fac.title}</h3>
                                    <p>{fac.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facility