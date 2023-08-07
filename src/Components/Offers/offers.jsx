import React from "react";
import "./offers.css";

const Offers = () => {
    return (
        <div className="secIntro">
            <h3 className="secTitle">
                Offers
            </h3>
            <p>
                Promotions, deals, special offers for you
            </p>

            <div className="offerCard grid" >
                    <div className="offerDiv">
                        <p> <b> Take your longest vacation yet</b></p>
                        <p> Browse properties offering long-term <br/> stays, many at reduced monthly rates. </p>
                        <button className="btn">
                            Find a stay
                        </button>
                    </div>
                    <br/>
                    <br/>
                    <div className="offerDivTwo">
                        <p> <b> Fly away to your dream vacation</b> </p>
                        <p> Get inspired - compare and book flights with flexibility </p>
                        
                        <button className="btn">
                        Search for flights
                        </button>
                    </div>


                

                </div>
        </div>
    )

}

export default Offers;