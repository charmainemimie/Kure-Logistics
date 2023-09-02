import logo from '../images/logo.png';


function Footer() {
  return (
    <div>
        
<footer className="bg-alizarincrimsonred shadow dark:bg-navcolour mx-0 mt-20 ">
    <div className="w-full max-w-screen-xl mx-auto p-1 md:py-8">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0">
                    <img src={logo}className="h-24 mr-3" alt="Flowbite Logo" />
                </a>

            <div className="sm:flex sm:items-center sm:justify-center mx-12 mt-5">
                <ul className=" mt-8 mx-8 flex flex-wrap items-center mb-6 text-2xl font-medium text-white sm:mb-0 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 font-large">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 font-large">Gallery</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline font-large">Contact</a>
                    </li>
                </ul>
            </div>
        </div></div>
        <hr className="my-6 border-whi sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span className="block text-sm text-white sm:text-center dark:text-white">© 2023 <a href="/" className="hover:underline">Kure Logistics™</a>. All Rights Reserved.</span>
            <span className="mx-12 block text-sm text-white sm:text-center dark:text-white">Developed by <a href="mailto:charmainemangorima@gmail.com" className="hover:underline">Mangorima</a></span>
        </div>
    </div>
</footer>


    </div>
  )
}

export default Footer