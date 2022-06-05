import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import {RiMailSendLine} from 'react-icons/ri'
import {SiMessenger, SiTelegram} from 'react-icons/si'
import 'react-toastify/dist/ReactToastify.css';
import '../../index.css'
import './Contact.css';

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          toast.success("Success!\nThank you for contacting me!");
          setTimeout(() => window.location.reload(), 6000);
      }, (error) => {
          console.log(error);
          toast.error(`Oh no! Something Went wrong, status ${error.status}`);
          setTimeout(() => window.location.reload(), 6000);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendLine className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@mrrolbot.com</h5>
            <a href="mailto:contact@mrrolbot.com" target='_blank' rel="noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Edwin Roldan</h5>
            <a href="https://m.me/vuela.cesos" target='_blank' rel="noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">
            <SiTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@mrrolbot</h5>
            <a href="https://t.me/mrrolbot" target='_blank' rel="noreferrer" >Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email'  required/>
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        <ToastContainer/>
      </div>
    </section>
  )
}

export default Contact