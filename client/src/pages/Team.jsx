import React from 'react'
import AboutCard from '../components/AboutCard'

const Team = () => {
    return (
        <div className='flex flex-wrap'>
            <AboutCard name='Nakul' position='Member' imgurl='pic.JPG' instagram='https://www.instagram.com/codernakul/' github='https://codernakul.github.io' linkedin='https://www.linkedin.com/in/er-nakul-singh/'/>
            <AboutCard name='Alok' position='Member'/>
            <AboutCard name='Vikash' position='Member'/>
            <AboutCard name='Ravi' position='Member'/>
            <AboutCard name='Nakul' position='Member'/>
        </div>

    );
}

export default Team