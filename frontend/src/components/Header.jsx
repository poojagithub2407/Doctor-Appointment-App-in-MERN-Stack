import { assets } from "../assets/assets";

const Header = () => {
     return (
          <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
               {/* left side */}
               <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
                    <p className="text-white text-3xl lg:text-5xl md:text-3xl font-semibold leading-tight md:leading-tight lg:leading-tight">
                         Book Appointment <br /> with Trusted Doctors
                    </p>
                    <div className="flex flex-col md:flex-row item-center gap-3  text-white text-sm font-light">
                         <img 
                         className="w-28"
                         src={assets.group_profiles} alt="group profile" />
                         <p>
                              Simply browse through our extensive list of trusted doctors, <br  className="hidden sm:block"/>
                              schedule your appointment hassle-free
                         </p>
                    </div>
                    <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto  hover:scale-105 transition-all duration-300">
                         Book Appointment
                         <img 
                         className="w-3"
                         src={assets.arrow_icon} alt="arrow icon" />
                    </a>
               </div>
               {/* right side */}
               <div className="md:w-1/2">
                    <img src={assets.header_img} alt="header" className="w-full h-auto" />
               </div>
          </div>
     );
};

export default Header;
