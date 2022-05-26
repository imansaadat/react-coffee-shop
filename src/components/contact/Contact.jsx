import React from 'react'
import Heading from '../heading/Heading'
import ContactImg from '../../assets/contact-img.svg'
import './Contact.css'


const Contact = () => {
  return (
    <section name="Contact" className="contact">
    <div className="contact_container container">
      <Heading title='Contact Us'  alt='Contact Us'/>
       <div className="contact_content">
        <div className="contact_image">
          <img src={ContactImg} alt="contact us" />
        </div>
        <div className="contact_form">
          <h4 className="form_title">Book A Table</h4>
           <form>
              <div className="field_block">
                <input type="text" className="field_input" name="name" placeholder="Enter your name" />
              </div>
              <div className="field_block">
               <input type="number" className="field_input" name="number" placeholder="Enter your number" />
             </div>
             <div className="field_block">
               <input type="number" className="field_input" name="guest" placeholder="How many guests" />
             </div>
             <input type="submit" className='btn' name="sendMessage" value="Send Message" />
           </form>
        </div>
       </div>
    </div>
</section>
  )
}

export default Contact