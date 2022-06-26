import React, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';

const Product = () => {
    const [product, setProduct] = useState([]);
    const [{ cart }, dispatch] = useStateValue();
    useEffect(() => {
        fetch('https://fec-inventory-api.herokuapp.com/product-info')
            .then(res => res.json())
            .then(data => {
                if (cart.length > 0) {
                    for (let i = 0; i < cart.length; i++) {
                        data = data.filter(item => item.id !== cart[i].product_id);
                        // console.log(data);
                    }
                    setProduct(data);
                } else {
                    setProduct(data)
                }
            })
    }, [cart, product]);


    const handleAdd = (id) => {
        fetch(`https://fec-inventory-api.herokuapp.com/product-info/${id}`)
            .then(res => res.json())
            .then(item => {
                fetch(`https://fec-inventory-api.herokuapp.com/inventory-info?product_id=${id}`)
                    .then(res => res.json())
                    .then(data => {
                        data[0].quantity = 1;
                        data[0].name = item.name
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: data
                        })
                    });
            });
    };


    return (
        <div className="grid grid-cols-2 overflow-y-scroll m-0 p-0">
            {
                product.map(product =>
                    <div className="flex items-center bg-gray-100 rounded m-2 p-2" key={product.id}>
                        {/* <div className=""> */}
                        <img className="h-32 w-44 mr-2" src="https://via.placeholder.com/150" alt="" />
                        {/* </div> */}
                        <div>
                            <p className="pb-5 max-w-prose">{product.name}</p>
                            <div className="flex justify-between ">
                                <p className="max-w-prose mr-2" > <small>{product.description}</small> </p>
                                <div className="flex flex-col ">
                                    <button className="bg-gray-300 mb-3 py-1 rounded-lg w-24 text-sm" onClick={() => handleAdd(product.id)}>Add to list</button>
                                    <button className="bg-gray-300 py-1 rounded-lg text-sm" >Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Product;