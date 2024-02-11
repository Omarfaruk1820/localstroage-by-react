import { useEffect } from "react";
import { useState } from "react";
import CoffeeOne from "../CoffeeOne/CoffeeOne";



const Home = () => {
    const [coffeeOne,setCoffeeOne]=useState([])
    useEffect(()=>{
        fetch('CoffeeOne.json')
        .then(response=>response.json())
        .then(data=>setCoffeeOne(data))
    },[])

    return (
        <div>
            <div className="  bg-gray-900 h-16">
                <div className="flex items-center justify-center">
                    <img className="mt-3" src="../../assets/images/more/1.png"></img>
                    <h1 className=" text-center text-2xl mt-3 font-bold text-white ">Espresso Emporium</h1>
                </div>
            </div>

            <div className="background">
                <div className="flex">
                    <div className="w-full">
                        
                    </div>
                    <div className="w-full items-center justify-center space-y-5 mt-80">
                        <h1 className="text-3xl text-white ml-10">Would you like a Cup of Delicious Coffee?</h1>
                        <h1 className="text-white">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of<br></br> every moment!!! Enjoy the beautiful moments and make them memorable.</h1>
                        <button className="text-white btn btn-secondary ml-10">Learn More</button>
                    </div>
                </div>

            </div >
            <div className="bg-gray-300 mb-5">
            <div className="grid grid-cols-4 max-w-6xl mx-auto">
            {
                coffeeOne.map(coffee=><CoffeeOne key={coffee.id} coffee={coffee}></CoffeeOne>)
            }
            </div>
            </div>
            
        </div>
    );
};

export default Home;