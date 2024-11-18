import React, { useState } from 'react';
import Logo from './images/logo.png';
import backgroundImage from './images/bglogin.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the login data
        const loginData = {
            email: email,
            Password: Password,
        };

        try {
            // Send request to login API
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            // Check if response is OK 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const result = await response.json();
            console.log('Login Successful:', result);

            if (result.token) {
                localStorage.setItem('authToken', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));
                navigate('/Home');

            }
            else {
                console.log("No token in response");
            }

        } catch (error) {
            console.error('Login Failed:', error);
        }
    };

    return (
        <div
            className="h-screen w-screen font-inter flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <form className="shadow-2xl rounded-lg bg-transparent p-8 bg-opacity-90" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src={Logo} alt="logo" className="w-24 h-24" />
                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 flex w-80 rounded-lg border border-gray-300 mt-1"
                            placeholder="Enter your email"
                            required
                        />
                    </label>
                    <label className="mt-4">
                        Password
                        <input
                            type="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 flex w-80 rounded-lg border border-gray-300 mt-1"
                            placeholder="Enter your Password"
                            required
                        />
                    </label>
                    <button type="submit" className="bg-slate-50 w-80 p-2 mt-4 rounded-lg">
                        Submit
                    </button>
                </div>
                <label className="flex items-center space-x-2 mt-2">
                    <input
                        type="checkbox"
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className='text-gray-300'>Remember Me</span>
                </label>
                <label
                    className='text-white'>Don't have an Account?<Link to="/register" className='text-blue-600'>Register Now</Link><br />
                </label>
                <label
                    className='text-white'>Developing HomePage<Link to="/Home" className='text-blue-600'>Develop</Link><br />
                </label>

            </form>
        </div>
    );
};

export default Login;
