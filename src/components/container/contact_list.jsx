import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {
    const ContactoInicial = new Contact("nombre2","apellidos","email",false);

    const [contacts, setContacts] = useState([ContactoInicial]);

    function connectContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].conectado = !tempContact[index].conectado;
        setContacts(tempContact);
    }

    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
    }
    function addContact(contact){
        const tempContact = [...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Contactos:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position:'relative', height:'400px' } }>
                        <table className='table'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellidos</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Conectado</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map( (contact,index) => 
                                        {
                                            return (
                                                <ContactComponent key={index} contact={contact} conectar={connectContact}  deleteContact={deleteContact} />
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                        <ContactForm add={addContact}/>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ContactList;
