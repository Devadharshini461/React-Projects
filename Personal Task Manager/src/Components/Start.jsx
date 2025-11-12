import React from 'react'
import { Link } from 'react-router-dom'

function Start(props) {
    return (
        <div className='start'>
            <div className='start-content'>
                <div className='text'>
                    <h2>{props.h}</h2>
                    {props.text}
                </div>
                <div className='img'><img src={props.link}></img></div>
                <Link to='/Signin'><button>Get Started</button></Link>
            </div>
        </div>
    )
}

export default Start