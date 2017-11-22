import React, {Component} from 'react'
import logo from './img/SIRSLogo.png'

export default class Header extends Component {
    render(){
        return(
            <div className='Header'>
            <h3 className='header-h3'>Contact SIRS: 866.568.7151  <a href='mailto:info@sirsco.com'>info@sirsco.com</a></h3>
            
            
            <div className='header-right'>

            AML COMPLIANCE SERVICES FOR
            <br/>
             NON-BANK FINANCIAL INSTITUTIONS    
            </div>
           
            </div>
        )
    }
}