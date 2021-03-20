import {useEffect,useState} from 'react';
import './App.css';
const Login= () => {

    
    useEffect(()=>{
        fetch('http://localhost:7000/user')
            .then(UserData=>{return UserData.json();})
            
    },[]);
    return (  
        <form action="useEffect">
            <label htmlFor="username" id="usernameL"> Username:</label>
            <input type="text" name="username" placeholder="Username" id="username" />
            <br/><br/>
            <label htmlFor="password" id="passwordL">Password:</label>
            <input type="password" name="password"/>
            <br/><br/>
            <input type="submit"/>

        </form>
    );
}
 
export default Login;