import React from 'react';

const ContactItem = ({data:{id , name , lastName , email , phone } , deleteHandler}) => {
    return (
        <li>
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