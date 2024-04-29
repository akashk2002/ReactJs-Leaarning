import React, {useState} from 'react';

function RegistrationForm() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [formData, setFormData] = useState({name:'', email:'',password:'', checked: false});
    
    const [error, setError] = useState('')

    const handleSubmit = (event) =>{

        event.preventDefault();
        setError('');

        if(!formData.email || !formData.name || !formData.password || !formData.checked ){
            setError('Please enter required fields');
            return;
        }

        if(formData.password.length < 8){
            setError('Please enter valid Password');
            return;
        }
        console.log("Data Submited");
        console.log('Name :', formData.name);
        console.log('Email :', formData.email);
        console.log('Password :', formData.password);
        console.log('Checked :',formData.checked)

        setFormData({name: '', email:'', password:'', checked: false});
        setError('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="name">Name : </label>
                <input id="name" value={formData.name} 

                onChange={(event) =>{
                // console.log(event.target.value);
                // setName(event.target.value)
                setFormData({...formData, name: event.target.value});
                }} />
            </section>

            <section>
                <label htmlFor="email">E-Mail : </label>
                <input type="email" id="email" value={formData.email} 
                
                onChange={(event) =>{
                    // setEmail(event.target.value)
                    setFormData({...formData, email: event.target.value});
                }}

                />
            </section>
            <section>
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" value={formData.password} 
                
                onChange={(event) =>{
                    // setEmail(event.target.value)
                    setFormData({...formData, password: event.target.value});
                }}

                />
            </section>
            <section>
                <label htmlFor="tnc">Agree to TnC </label>
                <input type="checkbox" id="tnc" checked={formData.checked}
                
                onChange={(event) =>{
                    // setEmail(event.target.value)
                    setFormData({...formData, checked: !formData.checked});
                }}

                />
            </section>

            <section>
                <button type='submit'>Submit</button>
            </section>
            <p style={{ color: 'red' }}>{error}</p>


        </form>
    );

}

export default RegistrationForm;