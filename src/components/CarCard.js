import React from 'react';

const CarCard = (props) => 
{
    return(
        <div className="carCard">
            <img className="carImage" src={props.image}/>
            <div className="carDetails">
                <h2><strong>{props.make}</strong></h2>
                <div className="carInfo">
                    <h4>{`${props.model}`}</h4>
                    <p>{`Year: ${props.year}`}</p>
                </div>
                    <p>{`Availability: ${props.availability}`}</p>
                    {props.availability === 'In Dealership' && <button>Buy Now</button>}
                    
            </div>
        </div>
);
}
export default CarCard;