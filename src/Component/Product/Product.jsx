import { useEffect } from "react";
import { useState } from "react";
import CoffeeTwo from "../CoffeeTwo/CoffeeTwo";


const Product = () => {
    const [coffeeTwo,setCoffeeTwo]=useState([]);
    useEffect(()=>{
        fetch('CoffeeTwo.json')
        .then(response=>response.json())
        .then(data=>setCoffeeTwo(data))
    },[])
    return (
        <div className="">
            <div className="product bg-no-repeat">
            
            <h1 className="text-center mt-16">- Sip & Savor -</h1>
            <h1 className="text-center font-bold text-3xl">Our Popular Products</h1>
            <h1 className="ml-[600px] justify-center mt-2">
                <button className="flex btn btn-secondary  text-white">add Coffee 
                <img src={"../../assets/images/cups/Rectangle 16.png"}></img></button>
            </h1>
            </div>
            
            <div className="producttwo bg-no-repeat bg-right m-y-5">
<div className="grid grid-cols-2 max-w-4xl gap-5 mx-auto">
{
    coffeeTwo.map(coffee=><CoffeeTwo key={coffee.id} coffee={coffee}></CoffeeTwo>)
}
</div>
            </div>

            

        </div>
    );
};

export default Product;