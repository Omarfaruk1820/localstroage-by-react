import { IoMdEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

const CoffeeTwo = ({ coffee }) => {
    const { coffee_id, coffee_img, coffee_name, coffee_chef, coffee_price } = coffee;
    return (
        <div>
            <div className="card bg-gray-100">
                <div className="flex mb-3">
                    <img className="h-48 mt-5" src={coffee_img}></img>
                    <div className="mt-12 space-y-3">
                        <h1 className="text-xl flex justify-between"><span className="font-bold">Name:</span>{coffee_name} <kbd className="kbd text-white bg-zinc-800"><IoMdEye /></kbd></h1>
                        <h1 className="text-xl flex justify-between"><span className="font-bold">Chef:</span>{coffee_chef} <kbd className="kbd text-white bg-cyan-900"><MdEdit /></kbd></h1>
                        <h1 className="text-xl flex justify-between"><span className="font-bold">Price:</span>{coffee_price} <kbd className="kbd text-white bg-indigo-900"><AiTwotoneDelete /></kbd></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeTwo;