import { useEffect, useState } from "react";
import SingleCoffee from "../SingleCoffee/SingleCoffee";


const CoffeeCard = () => {
    const [coffeeThree,setCoffeeThree]=useState([])
    useEffect(()=>{
        fetch('CoffeeThree.json')
        .then(response=>response.json())
        .then(data=>setCoffeeThree(data))
    },[])
    return (
        <div>
            <h1 className="text-center">Follow Us Now</h1>
           <h1 className="text-3xl text-center font-bold mb-5">Follow on Instagram</h1>
           <div className="grid grid-cols-4 gap-3 max-w-5xl mx-auto">
           {
            coffeeThree.map(coffee=><SingleCoffee key={coffee.id} coffee={coffee}></SingleCoffee>)
           }
           </div>
        </div>
    );
};

export default CoffeeCard;