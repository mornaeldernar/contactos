import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ contact, conectar, deleteContact }) {

    
    /**
     * 
     * @returns icono dependiendo de la task.completed
     */
     function contactConnectar(){
        if(contact.conectado){
            return(<i onClick={ () => conectar(contact) } className='bi bi-toggle-on task-action' style={{color:'green', fontSize:'large'}}></i>);
        }else{
            return(<i onClick={ () => conectar(contact) } className='bi bi-toggle-off task-action' style={{color:'grey', fontSize:'large'}}></i>);
        }
    }


  return (
    <tr>
        <th>{ contact.nombre }</th>
        <td>{ contact.apellido }</td>
        <td>{ contact.email }</td>
        <td>{ contactConnectar() }</td>
        <td>
            
            <i onClick={ () => deleteContact(contact) } className='bi-trash task-action' style={{color:'tomato', fontSize:'large'}}></i>
        </td>
    </tr>
  )
}

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact).isRequired,
    conectar : PropTypes.func.isRequired,
    deleteContact : PropTypes.func.isRequired
}

export default ContactComponent
