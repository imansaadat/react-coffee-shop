import React from 'react'
import Heading from '../heading/Heading'
import './Menu.css'

const Menu = ({data}) => {
    return (
        <section name="Menu" className="menu">
            <div className="menu_container container">
                <Heading  title='Popular Menu' alt='popular menu'/>
                <div className="menu_content">
                    <div className="menu_cols">
                        {
                            data.map((menu, index) => {
                                return (
                                    <div className="col" key={index}>
                                        <img src={menu.img} alt={menu.alt} />
                                        <h3>{menu.name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu