import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import NotFound from './NotFound';
import { useStateValue } from './StateProvider';
import Success from './Success';


const Cart = () => {
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)
    const [total, setTotal] = useState(0);
    const [notFound, setNotFound] = useState(false);
    const [{ cart }, dispatch] = useStateValue();
    let sum = 0;
    useEffect(() => {
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                sum += (cart[i].quantity * cart[i].unit_price)
            }
            setTotal(sum)
        }
    }, [cart])

    const increase = (id, quantity) => {
        let item = cart.find((data) => data.product_id === id);
        if (item.qty <= item.quantity) {
            return;
        }
        item.quantity++
        dispatch({
            type: "ADD_TO_CART",
            payload: item
        })
    };

    const decrease = (id) => {
        let item = cart.find((data) => data.product_id === id);
        if (item.quantity <= 1) {
            return;
        }
        item.quantity--;
        dispatch({
            type: "ADD_TO_CART",
            payload: item
        })
    };

    const deleteItem = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }

    const clicked = () => {
        if (cart.length > 0) {
            setModalOn(true);
        } else {
            setNotFound(true);
        }

    }


    return (
        <div className="w-8/12 bg-gray-100 rounded mb-5 m-2 p-2 relative h-5/6">
            <p className="mb-5">List of item that have been selected</p>
            <table className="w-full">
                <thead className="">
                    <tr>
                        <th className="text-center p-3 text-sm">SL No.</th>
                        <th className="text-center p-3 text-sm" >Item name</th>
                        <th className="text-center p-3 text-sm" >Qty</th>
                        <th className="text-center p-3 text-sm" >Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td className="text-center p-3 text-sm" >{i + 1}</td>
                                    <td className="text-center p-3 text-sm" >{item.name}</td>
                                    <td className="flex justify-center items-center p-3 text-sm"> <button className="bg-slate-200 px-1 rounded text-slate-500" onClick={() => decrease(item.product_id)} >-</button> <input className="w-8 text-right text-sm" type="number" value={item.quantity} readOnly /> <button className="bg-slate-200 px-1 rounded text-slate-500" onClick={() => increase(item.product_id, item.quantity)} >+</button> </td>
                                    <td className="text-center p-3 text-sm" >{item.unit_price * item.quantity}</td>
                                    <td className="text-center p-3 text-sm" > <button onClick={() => deleteItem(item.product_id)} className="bg-slate-200 px-1 rounded text-slate-500" >x</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <p className="absolute left-80 mt-5" > <span className="mr-7">Total:</span> {cart.length > 0 ? total : 0} </p>
            <button onClick={clicked} className="bg-gray-300 py-1 px-5 rounded-lg absolute bottom-8 left-48">Confirm</button>

            {modalOn && < Modal setTotal={setTotal} total={total} setModalOn={setModalOn} setChoice={setChoice} />}

            {choice && < Success setChoice={setChoice} />}

            {notFound && < NotFound setNotFound={setNotFound} />}
        </div>
    );
};

export default Cart;