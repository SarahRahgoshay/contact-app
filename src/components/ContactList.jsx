import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({contacts , deleteHandler}) => {
    return (
        <div>
            <h3>Contacts List</h3>
            {contacts.length ? (
            <ul>
            {contacts.map((contact) => (
               <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler}  />
            ))}
            </ul>
            ) : (
            <p> No contacts yet! </p> 
            )}     
        </div>
    );
};

export default ContactList;