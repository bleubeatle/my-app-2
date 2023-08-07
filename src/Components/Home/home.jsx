import React from "react";
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBed,
    faCalendarDays,
    faPerson,
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                    <h2>The joy of home.</h2>
                    <h2>The thrill of travel.</h2>
                    </h1>

                    <button className="btn">
                        Find your vacation rental
                    </button>

                </div>

                <div className="homeCard grid" >
                    <div className="locationDiv">
                        <p className="location"></p>
                        
                        <input type="text" 
                        placeholder='Where are you going' 
                        className='headerSearchInput'
                        />
                    </div>

                    <div className="locationDiv">
                        <p className="location"></p>
                        
                        <input type="text" 
                        placeholder='Chek-in Date - Check-out Date' 
                        className='headerSearchInput'
                        />
                    </div>

                    <div className="locationDiv">
                        <p className="location"></p>
                
                        <input type="text" 
                        placeholder='2 adults 1 children 1 room' 
                        className='headerSearchInput'
                        />
                    </div>

                    <button className="btn">
                        Search
                        </button>
                </div>

            </div>
        </section>
    )

}

export default Home;