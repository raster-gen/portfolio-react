import React from 'react';
import './optionItem.css'

const ContactOptionItem = ({data}) => {
    const {title, contact, link, icon} = data
    return (
        <article className='contact__option'>
            <div className="contact__option-icon">{icon}</div>
            <h4>{title}</h4>
            <h5 className={'contact__option-contact'}>{contact}</h5>
            <a href={link} target={"_blank"} className={'contact__option-link'}>Send a message</a>
        </article>
    );
};

export default ContactOptionItem;