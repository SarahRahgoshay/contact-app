import { useState } from 'react';
import inputs  from '../constant/inputs';

const Contact = () => {

    const [contacts , setContacts] = useState([]);
    const [alert , setAlert] = useState("");
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
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone ){
            setAlert("please enter valid data");
            return;
        }

        setAlert("");
        setContacts ((contacts) => [...contacts , contact]);
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
        </div>
    );
};

export default Contact;