import React from 'react';
import {MdOutlineEmail} from "react-icons/md";
import ContactOptionItem from "./ContactOptionItem";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import './contactOptions.css'

const ContactOptions = () => {
    const optionsData = [
        {
            title: 'Email',
            contact: 'mailto@gmail.com',
            link: 'mailto:mailto@gmail.com',
            icon: <MdOutlineEmail/>,
        },
        {
            title: 'Messenger',
            contact: 'G_Raster',
            link: 'https://m.me/g.raster',
            icon: <RiMessengerLine/>,
        },
        {
            title: 'WhatsApp',
            contact: '+0000000000',
            link: 'https://api.whatsapp.com/send?phone=+000000000',
            icon: <BsWhatsapp/>,
        },
    ]
    return (
        <div className='contact__options'>
            {optionsData.map((data, index) => {
                return (<ContactOptionItem data={data} key={index}/>);
            })}
        </div>
    );
};

export default ContactOptions;