import React from 'react';
import ContactItem from './ContactItem';

import styles from './ContactList.module.css';

const ContactList = ({contacts , deleteHandler}) => {
    return (
        <div className={styles.container}>
            <h3>Contacts List</h3>
            {contacts.length ? (
            <ul className={styles.contacts}>
            {contacts.map((contact) => (
               <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler}  />
            ))}
            </ul>
            ) : (
            <p className={styles.message}> No contacts yet! </p> 
            )}     
        </div>
    );
};

export default ContactList;