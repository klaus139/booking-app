import {useState, useContext} from 'react';
import './login.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';


const Login = () => {
    const [ credentials, setCredentials ] = useState({
        username:undefined,
        password:undefined
    });

    const { user, loading, error, dispatch} = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async(e) => {
        e.preventDefault();
        dispatch({type: 'LOGIN_START'});
        try{
            const res = await axios.post("/auth/login", credentials);

        }catch(err){
            dispatch({type: 'LOGIN_FAILURE', payload:err.response.data})
        }
    };

    return (
        <div className='login'>
            <div clasName='lContainer'>
                <input type='text' className='lInput' placeholder='username' id='username' onChange={handleChange} />

                <input type='password' className='lInput' placeholder='password' id='password' onChange={handleChange} />

                <button onClick={handleClick} className='lButton'>Login</button>

                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login;