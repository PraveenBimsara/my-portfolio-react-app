import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import facebook_icon from '../../assets/facebook.png'
import linkedin_icon from '../../assets/linkedin.png'
import github_icon from '../../assets/github.png'




const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9f28cc5a-f777-4af3-a2ea-42b31e02de15");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src = {theme_pattern} alt=''/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=''/><p>praveenbimsara99@gmai.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src = {call_icon} alt=''/><p>+94 785 890 185</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location_icon} alt=''/><p>Aluthgama, Sri Lanka</p>
                    </div>

                </div>
                <div className="social-icons">
                    <a href='https://www.facebook.com/praveen.desilva.562?mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer"><img src={facebook_icon} alt='https://www.facebook.com/praveen.desilva.562?mibextid=ZbWKwL'/></a>
                    <a href='https://www.linkedin.com/in/praveen-bimsara-8aa43b227/' target="_blank" rel="noopener noreferrer"><img src={linkedin_icon} alt=''/></a>
                    < a href='https://github.com/PraveenBimsara' target="_blank" rel="noopener noreferrer"><img src={github_icon} alt=''/></a>
                </div>
                
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows='8' placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact