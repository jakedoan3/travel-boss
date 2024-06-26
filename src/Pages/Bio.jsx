import React from "react";

const Bio = () => {
  return (
    <div className="bio">
      <img className="bio-img-main" src="/Images/bio2.jpg" alt="bio" />
      <h3 className="bio-title">About me</h3>
      <div className="bio-body">
        <div>
        Hey there! My name is Nicole Stacey, but friends call me Nicki. I have been a 'planner' all my life and would organize any reason to celebrate something since I was in middle school. Over the last 30+ years, I have helped create personalized travel and vacations for my own family, girls' weekends, excursions abroad, and several dozen trips to Disney World. I have a knack for finding one-of-a-kind experiences and have a great relationship with VRBO and AirBNB.
        </div>
        <br />
        <div>
        I'd love nothing more than to help research, organize, and personalize a trip for you! Reach out to me today for a <u>FREE CONSULTATION</u> and let’s talk about it!
        </div>
        
      </div>
      <img className="bio-img" src="/Images/bio1.jpg" alt="bio" />
      <img className="bio-img" src="/Images/bio3.jpg" alt="bio" />
    </div>
  );
};

export default Bio;
