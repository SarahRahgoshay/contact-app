import { useState } from 'react';


const Contact = () => {

    const [contacts , setContacts] = useState([]);
    const [contact , setContact] = useState({
        name: "" ,
        lastName: "" ,
        email: "" ,
        phone: ""
    });


    const changeHandler = (event) =>{
        const name= event.target.name;
        const value= event.target.value;

        setContact((contact)=> ({...contact , [name]: value}))
    }

    const addHandler = () =>{
        setContacts ((contacts) => [...contacts , contact]);
        setContact({
            name: "" ,
            lastName: "" ,
            email: "" ,
            phone: ""
        })
    }

    const{name , lastName , email , phone} = contact;

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={changeHandler}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={changeHandler}
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    value={phone} 
                    onChange={changeHandler}
                />
                <button onClick={addHandler}> Add contact </button>
            </div>
        </div>
    );
};

export default Contact;