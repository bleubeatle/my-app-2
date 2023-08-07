import React from "react";
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed, 
    faCar, 
    faEarthAfrica, 
    faPlane, 
    faTicket,
    faTaxi,
    faCircleXmark,
    faBars,
} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    // Code to toggel/show navBar
    // const [active, setActive] = useState('navBar')
    // const showNav = () =>{
    //     setActive('navBar activeNavbar')
    // }

    //Code to toggle/hide Navbar
    // const removeNav = () =>{
    //     setActive('navBar activeNavbar')



    return (
        
            <div className="header"> 
                <div className="logoDiv"> 
                    <h1>Booking.com</h1>
                        {/* <span>
                            <button className="navButton"> Register </button>
                            <button className="navBtn"> Login </button>
                        </span> */}
                </div>
                
                <div className="active">
                    <ul className="navList flex">

                        <li className="navItem">
                        <FontAwesomeIcon icon ={faBed} className='navIcon'/>
                        <span className="navLink">Stays</span>
                        </li>

                        <li className="navItem">
                        <FontAwesomeIcon icon ={faPlane} className='navIcon'/>
                        <span className="navLink">Flights</span>
                        </li>

                        <li className="navItem">
                        <FontAwesomeIcon icon ={faEarthAfrica} className='navIcon'/>
                        <span className="navLink">Flight + Hotel</span>
                        </li>

                        <li className="navItem">
                        <FontAwesomeIcon icon ={faCar} className='navIcon'/>
                        <span className="navLink">Car Rentals</span>
                        </li>

                        <li className="navItem">
                        <FontAwesomeIcon icon ={faTicket} className='navIcon'/>
                        <span className="navLink">Attractions</span>
                        </li>

                        <li className="navItem">
                        <FontAwesomeIcon icon ={faTaxi} className='navIcon'/>
                        <span className="navLink"> Airport Taxis</span>
                        </li>
                        

                    <div>
                        <button className="navButton"> Register </button>
                        <button className="navButton"> Login </button>
                    </div>
                    </ul>
                        
                    
                    <div  className="closeNavbar">
                    <FontAwesomeIcon icon ={faCircleXmark} className='icon'/>
                    </div>

                
                    <div className="toggleNavbar">
                    <FontAwesomeIcon icon ={faBars} className='icon'/>
                    </div>
                    

                </div>
            </div>
        
    )

}

export default Navbar;

