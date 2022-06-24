import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({add}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }
    return (
        <form onSubmit={ addContact } className='d-flex justify-content-center align-items-center mb-4'>
            <input id="inputName" type="text" placeholder='Nombre' className='form-control form-control-lg' required autoFocus ref={nombreRef} />
            <input id="inputName" type="text" placeholder='Apellido' className='form-control form-control-lg' required ref={apellidoRef} />
            <input id="inputName" type="email" placeholder='Email' className='form-control form-control-lg' required ref={emailRef} />
            <button type='submit' className='btn btn-primary btn-lg ms-2'>Agregar</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
