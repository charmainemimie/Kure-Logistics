import pic1 from "../images/gallery/pic1.jpg";
import pic2 from "../images/gallery/pic2.jpg";
import pic3 from "../images/gallery/pic3.jpg";
import pic4 from "../images/gallery/pic4.jpg";
import pic5 from "../images/gallery/pic5.jpg";
import pic6 from "../images/gallery/pic6.jpg";
//import pic7 from "../images/gallery/pic7.jpg";


const galleryfiles = [
  { id: 1, title: 'pic1', src: pic1 },
  { id: 2, title: 'pic2', src: pic2 },
  { id: 3, title: 'pic3', src: pic3 },
  { id: 4, title: 'pic4', src: pic4 },
  { id: 5, title: 'pic5', src: pic5 },
  { id: 6, title: 'pic6', src: pic6 },
  //{ id: 8, title: 'pic8', src: pic8 },
];

function GallerySection() {
  return (
    <div className=" px-8">
      {galleryfiles.map((file) => (
        <div key={file.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 p-4">
          <img src={file.src} alt={file.title} className="max-w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

export default GallerySection;
