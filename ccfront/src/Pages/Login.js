import React, { useEffect, useState } from 'react';
import Logo from './images/logo.png';
import backgroundImage from './images/bglogin.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const Login = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState(null); // To store error messages
    const [logined, setLogined] = useState(null); // To store error messages
    const [rememberMe, setRememberMe] = useState(false); // To manage Remember Me checkbox state
    const navigate = useNavigate();

    // Effect to check if there's any saved email and password
    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('Password');
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const loginData = {
            email: email,
            Password: Password,
        };

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            // Check if response is OK
            if (!response.ok) {
                const errorMessage = `Login failed! Status: ${response.status}`;
                const errorData = await response.json(); // Get error from backend
                setError(errorData.Message); // Set backend message
                throw new Error(errorMessage);
            }

            const result = await response.json();
            console.log('Login Successful:', result);

            if (result.token) {
                localStorage.setItem('authToken', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));

                // If Remember Me is checked, store email and password
                if (rememberMe) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('Password', Password);
                } else {
                    // Clear credentials 
                    localStorage.removeItem('email');
                    localStorage.removeItem('Password');
                }
                setLogined("Login Successful! Redirecting...");
                navigate('/Home'); 


            } else {
                console.error("No token in response");
                setError("No token received from server.");
            }
        } catch (error) {
            console.error('Login Failed:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div
            className="h-screen w-screen font-inter flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <form className="shadow-2xl rounded-lg bg-transparent p-8 bg-opacity-90" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src={Logo} alt="logo" className="w-24 h-24" />

                    {/* Display error alert if there is an error */}
                    {error && (
                        <Alert severity="error">{error}</Alert>
                    )}
                    {logined && (
                        <Alert severity="success">Login Successful!!</Alert>
                    )}

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
                    <span className="text-gray-300">Remember Me</span>
                </label>

                <label className="text-white">
                    Don't have an Account?
                    <Link to="/register" className="text-blue-600">
                        Register Now
                    </Link>
                </label><br />
                <label className="text-white">
                    Developing ???
                    <Link to="/Enquiry" className="text-blue-600">
                        Developerrr
                    </Link>
                </label>
            </form>
        </div>
    );
};

export default Login;
