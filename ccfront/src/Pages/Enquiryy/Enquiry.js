import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Building2, CircleArrowRight } from 'lucide-react';
import AllSettings from '../../Components/AllSettings';

const Enquiry = () => {
    const navigate = useNavigate();
    const openForm = () => {
        navigate('/CreateEnquiry');
    };

    const user = JSON.parse(localStorage.getItem('user')); // Get user info from localStorage
    const [enquirydata, setEnquirydata] = useState([]);

    // Fetch enquiries on component mount
    useEffect(() => {
        async function fetchEnquiry() {
            try {
                const response = await fetch('http://localhost:3000/auth/Enquiry'); // Ensure this matches the backend route
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                const data = await response.json();
                console.log('Fetched Enquiries:', data); // Debugging fetched data
                if (Array.isArray(data)) {
                    setEnquirydata(data);
                } else {
                    console.error('Data is not an array', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchEnquiry();
    }, []);

    const handleNewEnquiry = (newEnquiry) => {
        // Update the state by adding the new enquiry to the list of existing enquiries
        setEnquirydata((prevData) => [newEnquiry, ...prevData]);
    };

    return (
        <>
            <Search />
            <div className='flex justify-end'>
                <button className='bg-slate-300 p-2' onClick={openForm} onSubmit={handleNewEnquiry}>ADD ENQUIRY</button>
            </div>
            <div className="flex items-center justify-center ml-72">
                <div className="flex flex-col h-auto w-[770px] rounded-lg p-6 space-y-6">
                    {enquirydata.length > 0 ? (
                        enquirydata.map((enquiry) => (
                            <div className='grid grid-cols-2 font-inter bg-white p-4 rounded-lg shadow-md mb-4' key={enquiry._id}>
                                <div>
                                    <h1 className='font-bold text-4xl mt-7'>{enquiry.Productname}</h1>
                                    <ul className="mt-3 text-gray-700 text-[20px] p-4">
                                        <li><span className="font-semibold">CAS Number:</span> {enquiry.Casno}</li>
                                        <li className='mt-2'><span className="font-semibold">Quantity:</span> {enquiry.Quantity}</li>
                                        <li className='mt-2'><span className="font-semibold">Purity:</span> {enquiry.Purity}</li>
                                        <li className='mt-2'>
                                            <span className="font-semibold">Location:</span>
                                            {enquiry?.Location?.country || 'N/A'}
                                        </li>
                                        <li className='mt-2'>
                                            <span className="font-semibold">Posted:</span> {new Date(enquiry.createdAt).toLocaleDateString()}
                                        </li>
                                        <li className='mt-6 mb-5'>
                                            <button className="p-2 bg-black text-white rounded-md text-[16px] hover:bg-gray-700 transition duration-200 ease-in-out shadow-sm">
                                                Contact
                                            </button>
                                        </li>
                                        <div className='text-[16px] flex'>
                                            <Building2 className='mr-1' />{user?.CompanyName || 'N/A'}
                                        </div>
                                    </ul>
                                </div>
                                <div className='flex items-center flex-col mt-6'>
                                    <div className="flex-shrink-0">
                                        {enquiry.Structure && (
                                            <img
                                                src={enquiry.Structure}
                                                alt="Structure img"
                                                className="rounded-lg shadow-lg ml-10"
                                                width={320}
                                                height={320}
                                            />
                                        )}
                                    </div>
                                    <div className='text-[18px] flex mt-4 justify-end ml-48'>
                                        View <CircleArrowRight className='ml-1 flex items-center justify-center' />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No enquiries found.</p>
                    )}
                </div>
            </div>
            <AllSettings />
        </>
    );
};

export default Enquiry;