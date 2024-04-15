import { DataArray, Description } from '@mui/icons-material'
import React from 'react'



const WhatWeDoCards = ({ text, Description }) => {
    
    return (
        
            <div className='mt-6'>
                <p className='text-2xl text-lime-400 font-bold'>{text}</p>
                <p className='text-xl capitalize text-white'>{Description}</p>
            </div>
        
    )
}

export default WhatWeDoCards