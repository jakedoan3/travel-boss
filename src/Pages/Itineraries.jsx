import React from "react";

const Itineraries = () => {
  return (
    <div className="itineraries">
      <img
        className="contact-img"
        src="/Images/travel6.jpeg"
        alt="itineraries"
      />
      <h3 className="itineraries-title">Past Itineraries</h3>
      <p className="itineraries-body">
        I've arranged vacations for my clients in all of the following
        destinations:
        <p className="itineraries-list">
          <h3><b>Domestically:</b></h3> 
          <br />
          Sonoma/Napa Valley (CA) <br />
          Northern Michigan (especially winery trips)
          <br />
          Savannah, GA <br />
          Chicago, IL <br />
          NY, NY <br />
          New England (MA, CT, RI, coastal ME)
          <br />
          Jackson Hole, WY <br />
          Denver, CO <br />
          Washington, DC <br />
          New Orleans, LA <br />
          Key West, FL
        </p>
        <p className="itineraries-list">
          <h3><b>Internationally:</b></h3>
          <br />
          Ireland
          <br />
          London, UK
          <br />
          Paris, FR
          <br />
          Italy
          <br />
          British Virgin Islands
          <br />
          Costa Rica
          <br />
        </p>
      </p>
    </div>
  );
};

export default Itineraries;
