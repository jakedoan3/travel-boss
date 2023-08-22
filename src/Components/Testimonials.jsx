import React from 'react'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h3>Testimonials from my happy clients!</h3>
      <div className='testimonial'>
        <img className='testimonial-image' src='/Images/testimonial1.jpeg' alt="testimonial"/>
        <p className='testimonial-text'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore pariatur, assumenda maxime quaerat asperiores repellat, debitis quo aperiam ipsum adipisci quod velit laboriosam corporis?"</p>
        <h4 className='testimonial-author'>-Cam S</h4>
        <br/>
      </div>
      <div className='testimonial'>
        <img className='testimonial-image' src='/Images/testimonial2.jpeg' alt="testimonial"/>
        <p className='testimonial-text'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minima quod cumque facilis laudantium expedita in unde corrupti assumenda, temporibus deleniti aperiam ducimus, nesciunt molestiae optio mollitia, doloremque nam ad magnam fugiat nisi."</p>
        <h4 className='testimonial-author'>-Rachel N</h4>
        <br/>
      </div>
      <div className='testimonial'>
        <img className='testimonial-image' src='/Images/testimonial3.jpeg' alt="testimonial"/>
        <p className='testimonial-text'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam sequi id deleniti atque sint asperiores quisquam?"</p>
        <h4 className='testimonial-author'>-Salem S</h4>
        <br/>
      </div>
    </div>
  )
}

export default Testimonials