import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpcomingLaunches } from '../actions'; // Adjust the import path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW, faYoutube, faReddit } from '@fortawesome/free-brands-svg-icons';

const UpcomingLaunch = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.upcomingLaunches);

  useEffect(() => {
    dispatch(fetchUpcomingLaunches());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data.length) {
    return <div>No upcoming launches</div>;
  }

  const launch = data[data.length-1]; // Assuming you want to display the first upcoming launch

  return (
    <div>
      <div className="uper-box">
        <h1>Upcoming launch</h1>
        <div className="one">
          <div className="one-part">
            <div>
              <h5>MISSION NAME</h5>
              <h2>{launch.name}</h2>
            </div>
            <div>
              <h5>ROCKET</h5>
              <h2>{launch.rocket}</h2>
            </div>
            <div>
              <h5>FLIGHT NUMBER</h5>
              <h2>{launch.flight_number}</h2>
            </div>
            <div>
              <h5>TIME (UTC)</h5>
              <h2>{new Date(launch.date_utc).toLocaleString()}</h2>
            </div>
          </div>
          <div className="img-div">
            <h5>Launchpad</h5>
            <img
              src={launch.links.patch.small}
              alt="Launch Patch"
            />
          </div>
        </div>
        <div className="two">
          <div>
            <h5>Links</h5>
            <div className="links">
              {launch.links.wikipedia && (
                <a href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWikipediaW} size="12px" />
                </a>
              )}
              {launch.links.webcast && (
                <a href={launch.links.webcast} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="12px" />
                </a>
              )}
              {launch.links.reddit && (
                <a href={launch.links.reddit} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faReddit} size="12px" />
                </a>
              )}
            </div>
          </div>
          <div>
            <h5>LAUNCHPAD NAME</h5>
            <h2>{launch.launchpad}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLaunch;