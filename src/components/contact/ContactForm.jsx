import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

import './contactForm.css'

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zjy93cc', 'template_0qct16k', form.current, 'sUtHkBr9GOHxthtNL')
            .then((result) => {
                console.log(result.text);
                // window.alert("Send message: OK")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    };

    return (
        <form ref={form} onSubmit={sendEmail} className={'contact__form'}>
            <input type="text" name='name' placeholder={'Your Full Name'} required/>
            <input type="email" name='email' placeholder={'Your Email'} required/>
            <textarea name="message" rows="7" placeholder={'Your Message...'} required></textarea>
            <button type={'submit'} value={'Send'} className={'btn btn-primary'}>Send Message</button>
        </form>
    );
};

export default ContactForm;