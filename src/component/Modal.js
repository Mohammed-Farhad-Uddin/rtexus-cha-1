import { useStateValue } from "./StateProvider";

const Modal = ({ setModalOn, setChoice, total , setTotal }) => {
    const [{ cart }, dispatch] = useStateValue();
    const handleOKClick = () => {
        setChoice(true);
        setModalOn(false);
        setTotal(0);
        dispatch({
            type: "EMPTY_CART",
        })
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="bg-black bg-opacity-20 fixed inset-0 z-1   ">

            <div className="flex h-screen justify-center opacity-100 items-center  ">

                <div className="bg-white py-12 px-24 opacity-100 rounded-xl ">

                    <div className=" text-center font-bold text-lg  mb-1" >Are you sure ?</div>
                    <p className="text-sm text-center text-gray-400">Items blow will confirmed</p>

                    <table className="">
                        <thead className="">
                            <tr>
                                <th className="text-left p-3 text-sm" >Items </th>
                                <th className="text-left p-3 text-sm" >Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, i) => {
                                    return (
                                        <tr key={i}>

                                            <td className="text-left p-3 text-sm text-gray-700" >{item.name}</td>
                                            <td className="text-left p-3 text-sm text-gray-700" >{item.quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <hr className="" />
                    <p className="text-sm text-center mb-8 text-gray-700">Total: {total}</p>
                    <div className="flex align-center justify-center items-center">
                        <button onClick={handleCancelClick} className="rounded px-4 py-1 text-gray-600 border text-sm border-solid border-slate-400 ">Cancel</button>
                        <button onClick={handleOKClick} className="rounded px-4 py-1 ml-4 text-white text-sm bg-gray-600 ">Confirm</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal