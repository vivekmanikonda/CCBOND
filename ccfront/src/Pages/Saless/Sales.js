import { useNavigate } from "react-router-dom";
import React from 'react'

const Sales = () => {
    const navigate = useNavigate();
    const openForm = () => {
        navigate('/CreateSales');
    };
    return (
        <div className='ml-64 flex justify-end mr-10 mt-10'>
            <button className='bg-slate-300 p-2' onClick={openForm}>ADD SALE</button>
        </div>
    );

}

export default Sales;