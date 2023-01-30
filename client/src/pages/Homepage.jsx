import React from 'react'
import Club from '../components/Club'
import ContactUs from '../components/ContactUs'

const Homepage = () => {
    return (
        <div>
        
            <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <Club />
                <hr className="text-red-500 font-bold"></hr>

            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
                <ContactUs />

            </div>



        </div>
    )
}

export default Homepage