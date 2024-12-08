import { IoIosArrowForward } from "react-icons/io";

const BagsDesignCard = ({ name, image, jobTitle, description }) => {
  return (<>

    <div className="rounded-lg max-w-xs mx-auto group relative">
   
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="lg:w-[200px] lg:h-[260px] w-[400px] h-[100px] object-cover mx-auto mb-4 group-hover:shadow-[inset_0_6px_10px_rgba(0,0,0,0.5),inset_0_-6px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="w-6 h-6 bg-gray-300 text-white flex justify-center items-center rounded-full shadow-lg">
          <IoIosArrowForward size={10} className="text-black" />
        </div>
      </div>
    </div>


  </>)
}
export default BagsDesignCard