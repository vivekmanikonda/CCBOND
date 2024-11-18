import React from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../images/c3.webp'
import { Search, Building2, CircleArrowRight } from 'lucide-react'
import AllSettings from '../../Components/AllSettings';
import { useState, useEffect } from 'react';

const Enquiry = () => {
    const navigate = useNavigate();
    const openForm = () => {
        navigate('/CreateEnquiry');
    };
    //usestate
    const [enquirydata, setEnquirydata] = useState();
    //useeffect for fetching data
    useEffect(() => {
        async function fetchenquiry() {
            try {
                const response = await fetch('http://localhost:3000/auth/Enquiry')
                if (!response.ok) {
                    throw new Error("error fetching data");
                }
                const data = await response.json();
                setEnquirydata(data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        }
        fetchenquiry();
    }, [])
    return (
        <>
            <Search />
            {/*DETAILS FROM DATABASE */}
            <div className=' flex justify-end '>
                <button className='bg-slate-300 p-2' onClick={openForm}>ADD ENQUIRY</button>
            </div>
            <div className="flex items-center justify-center ml-72">
                <div className="flex h-[430px] w-[770px] bg-slate-100 rounded-lg shadow-lg p-6">
                    {/*mapping items using enquiry param */}
                    {enquirydata && enquirydata.map((enquiry) => {
                        return (
                            <div className='grid grid-cols-2 font-inter ' key={enquiry.id}>
                                <div>
                                    <h1 className='font-bold text-4xl mt-7'>{enquiry.Productname}</h1>
                                    <ul className="mt-3 text-gray-700 text-[20px]  p-4">
                                        <li >
                                            <span className="font-semibold ">CAS Number:</span> 105-38-7
                                        </li>
                                        <li className='mt-2'>
                                            <span className="font-semibold ">Quantity:</span> 200kg
                                        </li>
                                        <li className='mt-2'>
                                            <span className="font-semibold ">Purity:</span> 98%
                                        </li>
                                        <li className='mt-2'>
                                            <span className="font-semibold ">Need:</span> 3kg
                                        </li>
                                        <li className='mt-2'>
                                            <span className="font-semibold ">Posted:</span> 30 Sep 2024
                                        </li>
                                        <li className='mt-6 mb-5'>
                                            <button className="p-2 bg-black text-white rounded-md text-[16px] hover:bg-gray-700 transition duration-200 ease-in-out shadow-sm">
                                                Contact
                                            </button>
                                        </li>
                                        <div className='text-[16px] flex '>
                                            <Building2 className='mr-1' />Company Name
                                        </div>
                                    </ul>
                                </div>
                                <div className='flex items-center flex-col mt-6 '>
                                    <div className="flex-shrink-0 ">
                                        <img src={p1} width={320} height={320} alt="Structure img" className="rounded-lg shadow-lg ml-10" />
                                    </div>
                                    <div className='text-[18px] flex mt-4 justify-end ml-48'>
                                        View<CircleArrowRight className=' ml-1 flex items-center justify-center' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <AllSettings />

        </>
    );
};

export default Enquiry;
