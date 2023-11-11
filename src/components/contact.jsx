import { useState } from 'react';
import { v4 } from 'uuid';
import inputs  from '../constant/inputs';
import ContactList from './ContactList' ;


const Contact = () => {

    const [contacts , setContacts] = useState([]);
    const [alert , setAlert] = useState("");
    const [contact , setContact] = useState({
        id: "" ,
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
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone ){
            setAlert("please enter valid data");
            return;
        }

        setAlert("");
        const newContact = {...contact , id: v4()}
        setContacts ((contacts) => [...contacts , newContact]);
        setContact({
            name: "" ,
            lastName: "" ,
            email: "" ,
            phone: ""
        })
    }


    return (
        <div>
            <div>
                {inputs.map((input , index) => ( 
                    <input 
                      key={index}
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                      value={contact[input.name]} 
                      onChange={changeHandler}
                    />
                    ))}
               
                <button onClick={addHandler}> Add contact </button>
            {alert && <p> {alert} </p>}
            </div>
            <ContactList contacts={contacts} />
        </div>
    );
};

export default Contact;