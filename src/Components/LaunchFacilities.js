import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';



const LaunchFacilities = () => {
    const [showAll, setShowAll] = useState(false);
    const handleToggle = () => {
        setShowAll(!showAll);
    };

    // Example facility data
    const facilities = [
        {
            name: "Cape Canaveral",
            location: "Florida",
            temp: "24°C",
            wind: "2 m/s",
            weather: "Clouds",
            id: 1,
        },
        {
            name: "Vandenberg",
            location: "California",
            temp: "20°C",
            wind: "3 m/s",
            weather: "Clear",
            id: 2,
        },
        {
            name: "Kennedy Space Center",
            location: "Florida",
            temp: "25°C",
            wind: "1 m/s",
            weather: "Sunny",
            id: 3,
        },
        
        // Add more facilities as needed
    ];

    return (
        <div className="launch-facilities">
            <h1 style={{ marginBottom: 10 }}>Launch Facilities</h1>
            {facilities.slice(0, showAll ? facilities.length : 2).map((facility) => (
                <div className="facility" key={facility.id}>
                    <div className="facility-details">
                        <div className="ones">
                            <div>
                                <p>
                                    <strong>{facility.name}</strong>
                                    <br />
                                    LC-39A &amp; SLC-40
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Region:</strong> {facility.location}
                                </p>
                            </div>
                        </div>
                        <div className="twos">
                            <div>
                                <p>
                                    <strong>Temp:</strong> {facility.temp}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Wind:</strong> {facility.wind}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Weather:</strong> {facility.weather}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <a className="more-button" onClick={handleToggle}>
                {showAll ? (
                    <span> <FontAwesomeIcon icon={faChevronUp} className='icon-svg'/>Less</span>
                ) : (
                    <span> <FontAwesomeIcon icon={faChevronDown} className='icon-svg' />More</span>
                )}
            </a>
        </div>
    );
};

export default LaunchFacilities;
