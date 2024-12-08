import BagsDesignCard from "./BagsDesignCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BagsDesigns = () => {
  const profiles = [
    {
      image: '/images/image-1.jpg',
    },
    {
      image: '/images/image-2.jpg',
    },
    {
      image: '/images/image-3.jpg',
    },
    {
      image: '/images/image-4.jpg',
    }
  ];
  return (<>
    <section className="py-10">
      <div className="relative max-w-7xl mx-auto ">
        <div className="relative overflow-hidden h-12">
          <div className="relative overflow-hidden h-12  space-x-8 ">
            <h2 className="text-[32px] font-semibold text-gray-800 mb-8 whitespace-nowrap animate-right-to-left">
              designed for #goingplace
            </h2>
            <h2 className="text-[32px] font-semibold text-gray-800 mb-8 whitespace-nowrap animate-right-to-left">
              designed for #goingplace
            </h2>
            <h2 className="text-[32px] font-semibold text-gray-800 mb-8 whitespace-nowrap animate-right-to-left">
              designed for #goingplace
            </h2>
          </div>
        </div>

        <div className="mt-10 flex lg:flex-row flex-row flex-wrap gap-[30px] justify-center w-[90%] mx-auto">
          {profiles.map((profile, index) => (
            <div key={index} className="w-[calc(20%-10px)] flex-shrink-0">
              <BagsDesignCard {...profile} />
            </div>
          ))}
        </div>

        <div className=" absolute right-40 flex gap-4">
          <div className="flex justify-center items-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full shadow-sm cursor-pointer hover:bg-gray-300 border-[1px] border-[#000000]">
            <IoIosArrowBack size={12} className="text-black" />
          </div>
          <div className="flex justify-center items-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full shadow-md cursor-pointer hover:bg-gray-300 border-[1px] border-black">
            <IoIosArrowForward size={12} className="text-black" />
          </div>
        </div>
      </div>
    </section>
  </>)
}
export default BagsDesigns