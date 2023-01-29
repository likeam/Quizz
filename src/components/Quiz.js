import React from 'react'
import Questions from './Questions'

const Quiz = () => {
    return (
        <div className='Quiz'>
            {Questions[0].prompt}
        </div>
    )
}

export default Quiz
