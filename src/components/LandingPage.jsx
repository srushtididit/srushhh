import React from 'react'
import "../styles/LandingPage.css"
import bg from "../assets/srushhh.jpg"
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <div className='navbar'>
                <div className="logo">NextStep</div>
                <div className="buttons">
                    <button>Home</button>
                    <button>Services</button>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>

            <div>
                <div className='info'>
                    <div className='info-title'>INTELLIGENT CAREER GUIDANCE SYSTEM</div>
                    <div className='info-content'>
                        <div>Discover yourself. </div>
                        <div>Take the test to find your perfect career</div>
                    </div>
                    <button className='get-started'>Get Started!</button>
                </div>
                <img src={bg} />
            </div>
        </>
    )
}

export default LandingPage