import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3>Testimonials from my happy clients!</h3>
      <div className="testimonial">
        <img
          className="testimonial-image"
          src="/Images/testimonial1.png"
          alt="testimonial"
        />
        <p className="testimonial-text">
          "Nicki made our Disney World trip amazing! She listened to our needs
          and worked within our budget, creating a magical experience we will
          never forget!"
        </p>
        <h4 className="testimonial-author">~ Kate, Michigan</h4>
        <br/>
      </div>
      <div className="testimonial">
        <img
          className="testimonial-image"
          src="/Images/testimonial2.png"
          alt="testimonial"
        />
        <p className="testimonial-text">
        "Nicki has meticulously planned our annual girls' trip for the past 25 years, 25 different locations, spanning coast to coast. We’ve seen city lights, remote hideaways, and everything in between. That's a wealth of experience that few can rival.
        <br/>
        <br/>
        But it's not just about the destinations; it's the delicate art of managing the diverse interests and personalities of 5-10 women. Nicki doesn't just strike a balance; she conjures a harmonious symphony of experiences, seamlessly weaving activities and relaxation into each trip.
        <br/>
        <br/>
        Choosing Nicki as your guide is an investment in a journey that's not just memorable, but flawless. With her at the helm, you can relinquish your travel worries and savor every moment of the adventure."
        </p>
        <h4 className="testimonial-author">~ Jen M., Michigan</h4>
        <br />
      </div>
      <div className="testimonial">
        <img
          className="testimonial-image"
          src="/Images/testimonial3.png"
          alt="testimonial"
        />
        <p className="testimonial-text">
          "We contacted Nicki at TravelBoss to arrange a family reunion of 40+ adults and children from around the United States. Two challenges presented themselves: 1) Where to host the event and 2) the entire family wanted to be in the same home. Nicki was more than capable of meeting these challenges and more. At various points in the planning stage, I admit I was skeptical, but Travel Boss said, “Trust the process, I got this.” She did and we were so pleased with the location as well as the home that accommodated us all. The Travel Boss fielded multiple emails with patience, professionalism, and provided clarity and reassurances.
          <br/>
          <br/>
          Nicki anticipated our needs before we thought of them: handicap parking, closing off sections of the home to provide safety for babies and toddlers, easy access to balconies, and finding an easy-to-navigate home for the blind). I recommend Travel Boss for any of your traveling plans."
        </p>
        <h4 className="testimonial-author">~ Ramona H., Virginia</h4>
        <br />
      </div>
      <div className="testimonial">
        <img
          className="testimonial-image"
          src="/Images/testimonial4.png"
          alt="testimonial"
        />
        <p className="testimonial-text">
          "Our experience with Nicki at TravelBoss in planning our trip to Ireland was amazing. She gave gentle prompts to encourage us to book our stays in a timely manner, and arranged for us to stay in 10 different places across the country. When we had questions or concerns before and during the trip, she was able to troubleshoot and help us while abroad. We will definitely be calling TravelBoss again!"
        </p>
        <h4 className="testimonial-author">~ Janice G., Indiana</h4>
        <br/>
      </div>
    </div>
  );
};

export default Testimonials;
