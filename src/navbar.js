import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <Link to='/' className='navLink'><div>Home</div></Link>
                <Link to='/PAE' className='navLink'><div>Pricing & Enrollment</div></Link>
                <Link to='/references' className='navLink'><div>Regulatory References</div></Link>
                <Link to='/SEA' className='navLink'><div>SEA Rule 17a-4</div></Link>
                <Link to='/about' className='navLink'><div>About Us/Contact SIRS</div></Link>
            </nav>
        )
    }
}