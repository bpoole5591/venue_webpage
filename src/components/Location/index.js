import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.271190767588!2d-96.81045628423668!3d32.785067890881066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993c26cd07cd%3A0xa572cb4a4a3495ab!2sHouse%20of%20Blues%20Dallas!5e0!3m2!1sen!2sus!4v1567697022659!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="map"
      ></iframe>

      <div className="location_tag">
        <div>Location Map</div>
      </div>
    </div>
  );
};

export default Location;
