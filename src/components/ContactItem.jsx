import React from 'react';

import styles from './ContactItem.module.css';

const ContactItem = ({data:{id , name , lastName , email , phone } , deleteHandler}) => {
    return (
        <li className={styles.item}>
        <p>{name} {lastName}</p>
        <p>
            <span>&#9993;</span> 
            {email}
        </p>
        <p>
            <span>&#128383;</span>
            {phone}
        </p>
        <button onClick={() => deleteHandler(id)} >&#128937;</button>
    </li>
    );
};

export default ContactItem;