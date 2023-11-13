import {Link } from 'react-router-dom'

const WhyChooseUs = () => {
  return (
    <div className="py-3">
      <div className="container mx-auto">
      <div className="sm:flex sm:items-center sm:justify-center mx-12 mt-0">
              <div className="text-center font-semibold py-4 text-3xl">
                  <p className="relative inline-block">
                   Why Choose Us?
                  <span className="absolute bottom-0 left-0 w-[50%] h-1 bg-alizarincrimsonred"></span>
                  </p>
              </div>
         </div>

        <p className="">At <span className="font-bold text-alizarincrimsonred">Kure Logistics</span>, we take pride in our mission to deliver unparalleled excellence in transportation 
          and haulage services. Choosing us means choosing a partner dedicated to ensuring your cargo reaches its
           destination safely, reliably, and with maximum efficiency. Here&apos;s why we stand out:</p><br />

        <ol className="list-decimal pl-6">
          {/* Point 1: Safety First, Always */}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2">Safety First, Always</h2>
            <p>Safety is at the core of our operations. We adhere to the highest safety standards, implementing 
              rigorous protocols to protect your cargo and ensure the well-being of our team members. Your peace of 
              mind is our top priority.</p>
          </li>

          {/* Point 2: Reliability You Can Count On */}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2">Reliability You Can Count On</h2>
            <p>When you choose <span className="font-bold text-alizarincrimsonred">Kure Logistics</span>, you choose reliability. We understand the importance of timely 
              deliveries, and our commitment to punctuality is unwavering. Trust us to meet your deadlines and exceed 
              your expectations.</p>
          </li>

          {/* Point 3:  Efficient Solutions for Your Needs*/}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2"> Efficient Solutions for Your Needs</h2>
            <p>Our team of experts is dedicated to providing tailored solutions that cater to your specific 
              transportation and haulage requirements. From route planning to cargo handling, we optimize every
               aspect to ensure efficiency and cost-effectiveness.</p>
          </li>

          {/* Point 4:  Building Lasting Partnerships*/}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2"> Building Lasting Partnerships</h2>
            <p>We believe in the power of partnerships. By choosing us, you&apos;re not just selecting a service 
              provider; you&apos;re entering into a lasting partnership. We strive to understand your unique needs and 
              work collaboratively to achieve your goals.</p>
          </li>

          {/* Point 5:  Advanced Technology for Seamless Logistics*/}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2"> Advanced Technology for Seamless Logistics</h2>
            <p>Embracing cutting-edge technology sets us apart. Our use of advanced logistics solutions ensures 
              real-time tracking, transparency, and optimization, providing you with full visibility into the 
              transportation process.</p>
          </li>

          {/* Point 6:  Sustainable Practices for a Greener Future*/}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2"> Sustainable Practices for a Greener Future</h2>
            <p>Environmental responsibility matters to us. We are committed to sustainable practices that minimize our
               ecological footprint. Choose <span className="font-bold text-alizarincrimsonred">Kure Logistics</span> for transportation services that align with your commitment 
               to a greener future.</p>
          </li>

          {/* Point 7:  Customer Satisfaction is Our Priority*/}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2"> Customer Satisfaction is Our Priority</h2>
            <p>Your satisfaction is the measure of our success. We prioritize open communication, responsiveness,
              and a customer-centric approach. Experience service that not only meets but exceeds your expectations.</p>
          </li>

          {/* Point 8:   Innovation and Continuous Improvement*/}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2">  Innovation and Continuous Improvement</h2>
            <p>We are dedicated to staying ahead of the curve. Our commitment to innovation and continuous improvement
               means that we are always exploring new ways to enhance our services, ensuring we remain the preferred
              choice for all your transportation and haulage needs.</p>
          </li>

          {/* Point 9:    Driving Economic Growth and Creating Value*/}
          <li className="mb-4">
            <h2 className="text-xl font-bold mb-2">   Driving Economic Growth and Creating Value</h2>
            <p>By choosing Kure Logistics, you contribute to driving economic growth. We believe in creating value for 
              our clients and communities, fostering development and prosperity.</p>
            <br></br>
            <p>Join us in our mission to redefine transportation and haulage services. Choose <span className="font-bold text-alizarincrimsonred">Kure Logistics</span> for
           a journey of excellence, reliability, and innovation.</p><br></br>
                <Link href="/contact" className="hover:underline font-large text-blue-500"> Contact Us</Link> to get started or
                <Link href="/about" className="hover:underline font-large text-blue-700"> Learn More</Link> about our services.
          <br></br>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WhyChooseUs;
