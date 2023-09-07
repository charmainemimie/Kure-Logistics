import GallerySection from '../components/GallerySection'

function Gallery() {
  return (
    <div className="md:container  pt-2">
        <div className="sm:flex sm:items-center sm:justify-center mx-12 mt-0">
           <div>
              <div className="text-center font-semibold py-4 text-3xl">
                  <p className="relative inline-block pb-3">
                  Kure Logistics Gallery
                      <span className="absolute bottom-0 left-0 w-[50%] h-1 bg-alizarincrimsonred"></span>
                  </p>
              </div>
            </div>
         </div>


           <div className="">
           
              <GallerySection /> 
            
           </div> 
    </div>
    
  )
}

export default Gallery;