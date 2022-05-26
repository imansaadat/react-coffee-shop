import React from 'react'
import Heading from '../heading/Heading'
import Team1 from '../../assets/our-team-1.jpg'
import Team2 from '../../assets/our-team-2.jpg'
import Team3 from '../../assets/our-team-3.jpg'
import Team4 from '../../assets/our-team-4.jpg'
import Team5 from '../../assets/our-team-5.jpg'
import Team6 from '../../assets/our-team-6.jpg'
import TeamInfo from './TeamInfo'
import './Team.css'
const Team = () => {
    return (
        <section name="Team" className="team">
            <div className="team_container container">
                <div className="team_content">
                    <Heading title='Our Team' alt='Our Team' />
                    <div className="team_cols">
                        <TeamInfo img={Team1} name='William' alt='William' />
                        <TeamInfo img={Team2} name='James' alt='James' />
                        <TeamInfo img={Team3} name='Emma' alt='Emma' />
                        <TeamInfo img={Team4} name='John Deo' alt='John Deo' />
                        <TeamInfo img={Team5} name='Jennifer' alt='Jennifer' />
                        <TeamInfo img={Team6} name='Robert' alt='Robert' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team