import React from 'react';

const ContactItem = ({data:{name , lastName , email , phone}}) => {
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
        <button>&#128937;</button>
    </li>
    );
};

export default ContactItem;