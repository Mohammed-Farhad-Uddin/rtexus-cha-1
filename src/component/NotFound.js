import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

const NotFound = ({setNotFound}) => {
    return (
        <div className="bg-black bg-opacity-20 fixed inset-0 z-1" onClick={() => setNotFound(false)}>

        <div className="flex h-screen justify-center opacity-100 items-center  ">

            <div className="bg-white py-12 px-28 opacity-100 rounded-xl ">

                <div className=" flex justify-center  mb-4" ><AiOutlineInfoCircle className="text-4xl" /></div>

                <p className="text-center text-gray-700">Please add items first </p>


            </div>
        </div>
    </div>
    );
};

export default NotFound;