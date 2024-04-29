import React, {useState} from 'react';

function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) =>{

        event.preventDefault();
        console.log("Data Submited");
        console.log('Name :', name);
        console.log('Email :', email);
        setName("");
        setEmail("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="name">Name : </label>
                <input id="name" value={name} 

                onChange={(event) =>{
                // console.log(event.target.value);
                setName(event.target.value)
                }} />
            </section>

            <section>
                <label htmlFor="email">E-Mail : </label>
                <input id="email" value={email} 
                
                onChange={(event) =>{
                    setEmail(event.target.value)
                }}

                />
            </section>

            <section>
                <button type='submit'>Submit</button>
            </section>

        </form>
    );

}

export default RegistrationForm;