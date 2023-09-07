import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaMobileScreenButton,  } from 'react-icons/fa6';
import {HiLocationMarker} from 'react-icons/hi';

function Contacts() {


    
    return (
    <div className="container mx-auto md:mr-16 md:ml-16 pt-2 overflow-hidden">

        <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-">
            <span className="text-black text-2xl md:text-3xl font-bold underline decoration-alizarincrimsonred ">Contacting Kure Logistics<br/><br/></span>
                
        </div>

        <div className="sm:flex sm:items-center sm:justify-center mx-8 mt-2 px-5">
            <p className="text-1xl">
                If you wish to contact KL please send an email to the email addresses provided below.<br/><br/>

                If it is urgent or you would prefer to talk to a person directly, please use the telephone numbers listed below.
            </p>
            <br/>
            
        </div>

        <center>
        <div className="max-w-full sm:82 rounded-lg md:flex items-center sm:items-center sm:justify-center   mx-8 mt-1">

            <div className="max-w-full  sm:82 rounded-lg   sm:items-center sm:justify-center    mt-8">

                <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                       <FaEnvelopeOpenText className="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div className="  sm:items-center sm:justify-center  mt-1">
                    <p className=" text-1xl font-normal">
                    <div><span className="text-black text-2xl font-bold"><a href="kudamukosi@gmail.com" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                    kudamukosi@gmail.com
                    </p>
                  </div>
            </div>

            <div className="max-w-full  sm:82 rounded-lg  sm:items-center sm:justify-center  md:ml-48 mt-8">

                  <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <a href="tel:+263 77 277 0263"><div className="  sm:items-center sm:justify-center   mt-5 mb-5">
                       <FaEnvelopeOpenText className="sm:items-center sm:justify-center  my-6"/>
                    </div></a>
                  </IconContext.Provider>
                  <div className="  sm:items-center sm:justify-center   mt-1">
                    <p className=" text-1xl font-normal">
                    <div><span className="text-black text-2xl font-bold"><a href="tel:0116 221 3539" 
                    className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                    reginamukhosi@gmail.com
                    </p>
                  </div>

            </div>
        </div>

        </center>

        <center>

          
        <div className="max-w-full sm:82 rounded-lg md:flex items-center sm:items-center sm:justify-center   mx-8 mt-1">

            <div className="max-w-full  sm:82 rounded-lg   sm:items-center sm:justify-center    mt-8">

                <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <div className="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                       <FaMobileScreenButton className="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div className="  sm:items-center sm:justify-center  mt-1">
                    <p className=" text-1xl font-normal">
                    <div><span className="text-black text-2xl font-bold"><a href="reginamukhosi@gmail.com" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call Us</a></span></div>
                     +263 77 277 0263 / +263 77 353 7916
                    </p>
                  </div>
            </div>

            <div className="max-w-full  sm:82 rounded-lg  sm:items-center sm:justify-center  md:ml-48 mt-8">

                  <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <a href="#"><div className="  sm:items-center sm:justify-center   mt-5 mb-5">
                       <HiLocationMarker className="sm:items-center sm:justify-center  my-6"/>
                    </div></a>
                  </IconContext.Provider>
                  <div className="  sm:items-center sm:justify-center   mt-1">
                    <p className=" text-1xl font-normal">
                    <div><span className="text-black text-2xl font-bold"><a href="tel:0116 221 3539" 
                    className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit Us</a></span></div>
                     145 Hertfordshire, Gweru, O Midlands, Zimbabwe
                    </p>
                  </div>

            </div>
        </div>

        </center>


    </div>
  )
}

export default Contacts