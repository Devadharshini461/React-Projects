import React from 'react'
import { Link } from 'react-router-dom'

function Start2(props) {
    return (

        <div className='start'>
            <div className='start-content'>
                <div className='img'>
                    <img src={props.link}></img>
                </div>
                <div className='text'>
                    <h2>{props.h}</h2>
                    {props.text}
                </div>
                <Link to='/Signin'><button>Get Started</button></Link>
            </div>
        </div>

    )
}

export default Start2