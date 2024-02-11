import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="footerbg bg-base-200 mt-10">
            <footer className="footer p-10  max-w-5xl mx-auto ">
                <div>
                    <h6 className="text-3xl font-bold">Espresso Emporium</h6>
                    <h1 className="mt-3">Always ready to be your friend. Come & Contact with us to share your<br></br>
                        memorable moments, to share with your best companion.</h1>
                    <div className="flex gap-2 mt-3">
                        <h1 className="text-3xl"><SiFacebook /></h1>
                        <h1 className="text-3xl"><FaTwitter /></h1>
                        <h1 className="text-3xl"><FaInstagram /></h1>
                        <h1 className="text-3xl"><FaLinkedin /></h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-3">Get in Touch</h1>
                        <h1 className="flex mt-3">
                            <p className="mt-1 text-2xl mr-10"><FaPhoneAlt /></p>
                            <p className="text-xl">01822637989</p>
                        </h1>
                        <h1 className="flex mt-3">
                            <p className="mt-1 text-2xl mr-10"><MdOutlineEmail /></p>
                            <p className="text-xl">omarfarukfci9th@gmail.com</p>
                        </h1>
                        <h1 className="flex mt-3">
                            <p className="mt-1 text-2xl mr-10"><FaLocationDot /></p>
                            <p className="text-xl">sector 10 Uttara,Dhaka</p>
                        </h1>
                    </div>
                </div>


                <form>
                <h6 className="footer-title font-bold">Connect with Us</h6>
                   
            <div className="mt-10 space-y-3">
            <input type="text" placeholder="Type Name" className="input input-bordered input-md w-full"/>
         <input type="text" placeholder="Type Email" className="input input-bordered input-md w-full"/>

         <input type="text" placeholder="Type comment" className="input input-bordered input-lg w-full"/>
            </div>
            <button className="btn btn-secondary rounded-full mt-2">Send Message</button>
                </form>

            </footer>
            
            <div className="copyRight">
<h1 className=" text-white  text-center text-2xl font-bold">Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </div>
    );
};

export default Footer;