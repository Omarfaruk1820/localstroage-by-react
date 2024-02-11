import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Product/Product";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
           <Outlet></Outlet>
           <Home></Home>
           <Product></Product>
           <CoffeeCard></CoffeeCard>
           <Footer></Footer>
        </div>
    );
};

export default Root;