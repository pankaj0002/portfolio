import React, { Component } from 'react'
import '../assets/Navigation.css'


export default class Navigation extends Component {
    render() {
const sections= ['Home','About','Portfolio','Services','Contact']
const NavLinks = sections.map(section=>{

    return(
        <li><a href={'#'+ section}>{section}</a></li>
    )
});

        return (
           <nav>

                <div className="logo-wrapper">
                    <h2 className="logo">{this.props.LogoTitle}</h2>
                </div>
                <idv className="navbar">
                    <div className="navbar-item">
                        <ul>
                            {/* <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li> */}
                            {NavLinks}
                        </ul>
                    </div>
                </idv>
 
           </nav>
        )
    }
}
