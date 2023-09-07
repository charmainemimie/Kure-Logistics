
import pic8 from "../images/gallery/pic8.jpg";
//import {Link} from 'react-router-dom';
function About() {
  return (
    <div>
      <marquee className="text-2xl font-bold text-alizarincrimsonred pt-4">An upcoming industry leader in road haulage in Zimbabwe</marquee>
      

      <div className=" sm:items-center sm:justify-center mx-12 mt-5">
            <p>
            Established in 2020, KURE LOGISTICS is a family run business operating 5 UNITS for now. KURE LOGISTICS is recognised as one of the upcoming industry leaders in road haulage, utilising a distinct range of trailer types such as curtainsiders, tippers and flatbeds, which allows the delivery of an extensivevariety of services.<br/><br/>

           The constant striving to improve efficiency and customer satisfaction resulted in KURE LOGISTICS being named as the most improving entrepreneur of the year
            </p><br/><br/>
        </div>


      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col w-full lg:w-3/4 p-8 overflow-hidden lg:flex-row">
      <div className="bg-blue-300 rounded-lg overflow-hidden lg:w-1/2 mt-6 sm:mt-0">
      <img src={pic8} alt="Aboutpic" className="w-full h-full object-cover" />
    </div>
      <div className="bg-gradient-to-br from-alizarincrimsonred to-pink-900 rounded-lg p-6 text-white lg:w-1/2">
      <h1 className="text-3xl font-semibold mb-4">A haulier for transporting any products</h1>
      <p className="mb-4">
      We operate a mixture of curtainsized and flat trailers allowing us to adjust to our customers&apos; needs by being capable of transporting a vast range of different products.
      </p>
      <p className="mb-4">
      Our FleetMatics tracking system allows us to monitor the position and progress of all vehicles 24/7 enabling us to constantly improve efficecy and provide customers with an accurate arrival time of their delivery. All our drivers are highly experienced and trained
      </p>
     
      <p className="mb-4">
      In order to ensure both efficiency and productivity of the trucks, repairs and maintenance have been an inaugural part of KURE LOGISTICS.
      </p>

      
      <p className="mb-4">
      With 2 full-time mechanics on site, a large garage and VOSA standard inspection pit, it is a consistent aim to reduce both breakdowns and repair times.
      </p>

      
    </div>

  </div></div>


            </div>
    
  )
}

export default About