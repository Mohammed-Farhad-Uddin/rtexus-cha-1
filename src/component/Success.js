import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";


const Success = ({ setChoice }) => {
    return (
        <div className="bg-black bg-opacity-20 fixed inset-0 z-1" onClick={() => setChoice(false)}>

            <div className="flex h-screen justify-center opacity-100 items-center  ">

                <div className="bg-white py-12 px-24 opacity-100 rounded-xl ">

                    <div className="flex justify-center  mb-4" ><BsCheck2Circle className="text-4xl" /></div>

                    <p className="text-center text-gray-700">Supply request confirmed </p>


                </div>
            </div>
        </div>

    );
};

export default Success;