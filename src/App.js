import React, { useState } from 'react';
import './App.css';
import Cart from './component/Cart';
import Product from './component/Product';
import { BsChevronDown } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { BiSlider } from "react-icons/bi";


function App() {
  const [filter, setFilter] = useState({
    isOpen: false,
    value: "",
  });

  const [tag, setTag] = useState({
    isOpen: false,
    value: "",
  });




  return (
    <>
      <div className="ml-3 mb-3">
        <h1 className="mb-3">Dashboard {`>`} Supply room</h1>
        <div className="flex items-center">
          <input type="text" placeholder="Search items" className="border border-solid border-slate-400 rounded px-2 " />
          <div className="flex border border-solid border-slate-400 rounded p-1 mx-2 bg-slate-50 hover:cursor-pointer">
            <BiSlider className="bg-gray-300 rounded" />
            <div className="relative">
              <BsChevronDown onClick={() => setTag({ ...tag, isOpen: !tag.isOpen })} />
              {tag.isOpen && <ul className="absolute bg-white rounded mt-3 right-px translate-x-2">
                <li className="p-2 hover:bg-slate-100" onClick={() => setTag({ ...tag, isOpen: false, value: "tag1" })}>tag1</li>
                <li className="p-2 hover:bg-slate-100" onClick={() => setTag({ ...tag, isOpen: false, value: "tag2" })}>tag2</li>
                <li className="p-2 hover:bg-slate-100" onClick={() => setTag({ ...tag, isOpen: false, value: "tag3" })}>tag3</li>
                <li className="p-2 hover:bg-slate-100" onClick={() => setTag({ ...tag, isOpen: false, value: "tag4" })}>tag4</li>
              </ul>}
            </div>
          </div>

          <div className="flex border border-solid border-slate-400 rounded p-1 bg-slate-50 hover:cursor-pointer">
            <BiSortAlt2 className="bg-gray-300 rounded" />
            <div className="relative">
              <BsChevronDown onClick={() => setFilter({ ...filter, isOpen: !filter.isOpen })} />
              {filter.isOpen && <ul className="absolute bg-white  rounded mt-3 right-px translate-x-3">
                <li className="p-2 hover:bg-slate-100" onClick={() => setFilter({ ...filter, isOpen: false, value: "filter1" })}>filter1</li>
                <li className="p-2 hover:bg-slate-100" onClick={() => setFilter({ ...filter, isOpen: false, value: "filter2" })}>filter2</li>
                <li className="p-2 hover:bg-slate-100" onClick={() => setFilter({ ...filter, isOpen: false, value: "filter3" })}>filter3</li>
                <li className="p-2 hover:bg-slate-100" onClick={() => setFilter({ ...filter, isOpen: false, value: "filter4" })}>filter4</li>
              </ul>}
            </div>
          </div>
          {tag.value && <div className="border border-solid border-gray-300 rounded text-sm px-2 mx-2 flex items-center">
            <p className="mr-2">{tag.value}</p>
            <p className="hover:cursor-pointer" onClick={() => setTag({ ...filter, value: "" })}>X</p>
          </div>}
          {filter.value && <div className="border border-solid border-gray-300 rounded text-sm px-2 mx-2 flex items-center">
            <p className="mr-2">{filter.value}</p>
            <p className="hover:cursor-pointer" onClick={() => setFilter({ ...filter, value: "" })}>X</p>
          </div>}

        </div>
      </div>
      <div className="flex w-full h-screen">
        <Product />
        <Cart />
      </div>
    </>
  );
}

export default App;
