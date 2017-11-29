import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <Menu className='ham'>
                    <div className='close-window'>X</div>
                    <Link to='/' className='hamLink'><div>Home</div></Link>
                    <Link to='/PAE' className='hamLink'><div>Pricing & Enrollment</div></Link>
                    <Link to='/references' className='hamLink'><div>Regulatory References</div></Link>
                    <Link to='/SEA' className='hamLink'><div>SEA Rule 17a-4</div></Link>
                    <Link to='/about' className='hamLink'><div>About Us/Contact SIRS</div></Link>
                </Menu>
                <Link to='/' className='navLink'><div>Home</div></Link>
                <Link to='/PAE' className='navLink'><div>Pricing & Enrollment</div></Link>
                <Link to='/references' className='navLink'><div>Regulatory References</div></Link>
                <Link to='/SEA' className='navLink'><div>SEA Rule 17a-4</div></Link>
                <Link to='/about' className='navLink'><div>About Us/Contact SIRS</div></Link>
            </nav>
        )
    }
}