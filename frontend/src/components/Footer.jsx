import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="md:mx-10">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 my-10 mt-40 text-sm">
                {/* Logo Section */}
                <div>
                    <img
                        src={assets.logo}
                        className="mb-5 w-40"
                        alt="Company Logo"
                    />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
                {/* Company Section */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* Get in Touch Section */}
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+0-000-000-000</li>
                        <li>prescripto@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* Divider and Copyright */}
            <div>
                <hr className="border-gray-300 my-6" />
                <p className="text-sm py-5 text-center text-gray-500">
                    Copyright 2024 @ Greatstack.dev - All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
