import PropTypes from 'prop-types';
import React from 'react';

const WeatherHeader = ({ city, description }) => (
  <div className="dashhead">
    <div className="dashhead-titles">
      <h2 className="dashhead-title">{city}</h2>
      <h6 className="dashhead-subtitle" style={{ color: '#00BCD4' }}>{description[0].description}</h6>
    </div>

    <div className="btn-toolbar dashhead-toolbar">
      <div className="btn-toolbar-item input-with-icon">
        <input readOnly="true" disabled="disabled" type="text" value={`    ${new Date().toDateString()}`} className="form-control" />
        <span className="icon icon-calendar" />
      </div>
    </div>
  </div>
);

WeatherHeader.defaultProps = {
	city: 'Search for a City',
	description: 'Get the weather in any city',
};

WeatherHeader.propTypes = {
	city: PropTypes.string,
	description: PropTypes.array,
};

export default WeatherHeader;
