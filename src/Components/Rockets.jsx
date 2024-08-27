import React, { useState } from 'react';

const rockets = [
    {
        name: 'Falcon 9',
        status: 'Active',
        image: 'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
        description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.'
    },
    {
        name: 'Falcon Heavy',
        status: 'Active',
        image: 'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
        description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.'
    },
    {
        name: 'Starship',
        status: 'In development',
        image: 'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg',
        description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.'
    },
];

const Rockets = () => {
    const [selectedRocket, setSelectedRocket] = useState(null);

    const handleCardClick = (rocket) => {
        setSelectedRocket(rocket);
    };

    const handleClosePopup = () => {
        setSelectedRocket(null);
    };

    return (
        <>
            <div className="rocket-cards">
                {rockets.map((rocket) => (
                    <div key={rocket.name} className="rocket-card" onClick={() => handleCardClick(rocket)}>
                        <img src={rocket.image} alt={rocket.name} className="rocket-image" />
                        <h3>{rocket.name}</h3>
                        <div className={`status ${rocket.status === 'Active' ? 'active' : 'in-development'}`}>
                            <span>STATUS</span> {rocket.status}
                        </div>
                    </div>
                ))}
            </div>

            {selectedRocket && (
                <div className="popup-overlay">
                <div className="popup-content">
                    <button className="close-button" onClick={handleClosePopup}>X</button>
                    <div className="popup-body">
                        <img src={selectedRocket.image} alt={selectedRocket.name} className="popup-image" />
                        <div className="popup-description">
                            <h3>DESCRIPTION</h3>
                            <p>{selectedRocket.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};

export default Rockets;
