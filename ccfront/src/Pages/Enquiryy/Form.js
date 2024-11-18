import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CountryStateCity from '../../Components/CountryStateCity';
import { CircleX } from 'lucide-react';
import axios from "axios";
import Alert from '@mui/material/Alert';
import CloseFormDialog from '../../Components/CloseFormDialog';

const Form = () => {
    const [Productname, setProductname] = useState(null);
    const [Casno, setCasno] = useState(null);
    const [Quantity, setQuantity] = useState(null);
    const [Purity, setPurity] = useState(null);
    const [Description, setDescription] = useState(null);
    const [Document, setDocument] = useState(null);
    const [Quote, setQuote] = useState(null);
    const [Structure, setStructure] = useState(null);
    const [Location, setLocation] = useState({
        country: '',
        state: '',
        city: ''
    });
    const [successMessage, setSuccessMesaage] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();
    const closeForm = () => {
        setOpenDialog(true); // Open confirmation dialog
    };
    //  "Yes" 
    const handleConfirmClose = () => {
        setOpenDialog(false); // Close dialog
        navigate("/Enquiry");
    };
    const handleCancelClose = () => {
        setOpenDialog(false); //  close dialog
    };
    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (fieldName === Structure) {
            setStructure(file);
        }
        else if (fieldName === Document) {
            setDocument(file);
        }
    };

    const hanleEnquiryForm = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/auth/CreateEnquiry', {
                Productname,
                Casno,
                Quantity,
                Location,
                Purity,
                Description,
                Quote,
                Document,
                Structure
            });
            setSuccessMesaage("Form submitted Successfully!!");
            navigate('/Enquiry');
            console.log("Form Submitted", response.data);
        }
        catch (error) {
            console.error("Error Submitting Form!!", error);
        }
    };

    return (
        <>
            <div className="min-h-screen ml-64 mt-7 mb-7 flex items-center justify-center ">
                <div className="max-w-4xl w-full p-8 bg-white border rounded-lg shadow-2xl ">
                    <form onSubmit={hanleEnquiryForm}>
                        <h2 className="text-2xl font-semibold text-center mb-6">Enquiry Form</h2>
                        <div className="flex justify-end mb-2">

                            <button
                                onClick={closeForm}
                                type="button">
                                <CircleX size={24} />
                            </button>

                            <CloseFormDialog
                                open={openDialog}
                                onConfirm={handleConfirmClose}
                                onCancel={handleCancelClose}
                            />
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* Product Name */}
                            <label className="flex flex-col">
                                <span className="font-semibold mb-2">Product Name</span>
                                <input
                                    type="text"
                                    value={Productname}
                                    onChange={(e) => setProductname(e.target.value)}
                                    placeholder="Enter Product Name"
                                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </label>

                            {/* CAS No */}
                            <label className="flex flex-col">
                                <span className="font-semibold mb-2">CAS No</span>
                                <input
                                    type="text"
                                    value={Casno}
                                    onChange={(e) => setCasno(e.target.value)}
                                    placeholder="Chemical Abstracts Service Number"
                                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* Quantity */}
                            <label className="flex flex-col">
                                <span className="font-semibold mb-2">Quantity</span>
                                <input
                                    type="text"
                                    value={Quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    placeholder="Enter Quantity"
                                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* Purity */}
                            <label className="flex flex-col">
                                <span className="font-semibold mb-2">Purity</span>
                                <input
                                    type="text"
                                    value={Purity}
                                    onChange={(e) => setPurity(e.target.value)}
                                    placeholder="Specify Purity"
                                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* File Upload */}
                            <label className="flex flex-col col-span-2">
                                <span className="font-semibold mb-2">Structure</span>
                                <input
                                    type="file"
                                    value={Structure}
                                    onChange={(e) => handleFileChange(e, 'Structure')}
                                    placeholder="Select File"
                                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* Quote */}
                            <label className="flex flex-col col-span-2">
                                <span className="font-semibold mb-2">Quote</span>
                                <input
                                    type="text"
                                    value={Quote}
                                    onChange={(e) => setQuote(e.target.value)}
                                    placeholder="Quote With Purity"
                                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* File Upload with PrimeReact */}
                            <label className="flex flex-col col-span-2">
                                <span className="font-semibold mb-2">Document Upload</span>
                                <input
                                    type="file"
                                    value={Document}
                                    onChange={(e) => handleFileChange(e, 'Document')}
                                    placeholder="Select File"
                                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* Description */}
                            <label className="flex flex-col col-span-2">
                                <span className="font-semibold mb-2">Description</span>
                                <textarea
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Overview of product details or special notes."
                                    className="p-3 w-full h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            {/* Location */}
                            <label className="flex flex-col col-span-2">
                                <span className="font-semibold mb-2">Location</span>
                                <div className="border-2 w-full p-3 rounded-lg">
                                    <CountryStateCity Location={Location} setLocation={setLocation} />
                                </div>
                            </label>
                            <div className="mt-3 text-lg text-red-500 w-[420px]">
                                <p>Note: The enquiry will be deactivated after 2 Weeks.</p>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                >
                                    Submit
                                </button>
                                {successMessage && <Alert severity="success">Form Submitted</Alert>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
