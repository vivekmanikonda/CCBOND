import React, { useState } from 'react';
import backgroundImage from './images/bglogin.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';


const Register = () => {
    const [Name, setName] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [CompanyUrl, setCompanyUrl] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    // Handling register submit button
    const HandleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (Password !== ConfirmPassword) { // Check if passwords match
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                Name,
                email,
                Password,
                CompanyName,
                CompanyUrl,
                PhoneNumber,
                ConfirmPassword
            });

            setSuccessMessage("Registration Successful!!");
            console.log("Registration Successful", response.data);
            navigate('/Enquiry');
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || "Error occurred, please try again later!");
            } else {
                setError("Registration failed. Please try again later!");
            }
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <form
                className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-xl shadow-lg w-full max-w-3xl"
                onSubmit={HandleRegister}
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name Field */}
                    <label className="flex flex-col text-gray-900">
                        Name
                        <input
                            className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Enter your name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>

                    {/* Company Name Field */}
                    <label className="flex flex-col text-gray-900">
                        Company Name
                        <input
                            className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Enter your company name"
                            value={CompanyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </label>

                    {/* Email Field */}
                    <label className="flex flex-col text-gray-900">
                        Email
                        <input
                            className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            placeholder="Enter your company email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    {/* Phone Number Field */}
                    <label className="flex flex-col text-gray-900">
                        Phone Number
                        <input
                            className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </label>

                    {/* Company URL Field */}
                    <label className="flex flex-col text-gray-700">
                        Company URL
                        <input
                            className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="url"
                            placeholder="Enter your company URL"
                            value={CompanyUrl}
                            onChange={(e) => setCompanyUrl(e.target.value)}
                        />
                    </label>

                    {/* Password Field */}
                    <label className="flex flex-col text-gray-900">
                        Password
                        <input
                            className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Enter your password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    {/* Confirm Password Field */}
                    <label className="flex flex-col text-gray-900">
                        Confirm Password
                        <input
                            className="p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Confirm your password"
                            value={ConfirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>

                    {/* Terms and Policy */}
                    <label className="flex items-center col-span-2 text-gray-900">
                        <input
                            type="checkbox"
                            className="mr-2 rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        I agree to the Terms of Service and Privacy Policy
                    </label>
                </div>

                {/* Error and Success Messages */}
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {
                    successMessage && < Alert variant="filled" severity="success">
                        Registered Successfully!!
                    </Alert>
                }

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Register
                </button>
            </form >
        </div >
    );
}

export default Register;
