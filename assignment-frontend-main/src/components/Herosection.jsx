import { BsEmojiFrown } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";

const Herosection = () => {
    return (<>
        <div className="cursor-pointer fixed bottom-4 right-[2px] text-center flex items-center justify-center flex-col hover-container">
            <div className="flex items-center justify-center space-x-2">
                <FaHandPaper className="text-yellow-500 text-xl" />
                <h2 className="text-gray-300 font-semibold mb-0 text">We are here</h2>
            </div>

            <div className="h-12 w-12 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg emoji-container">
                <BsEmojiFrown className="text-2xl text-white" />
            </div>
        </div>


        <div className="bg-custom-lightblue">

            <div className="relative h-screen w-[80%] mx-auto"
                style={{
                    backgroundImage: 'url(images/TrolleyBag2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col text-custom-white justify-end items-center h-full text-center text-white">
                    <h1 className="text-3xl sm:text-6xl text-center lg:text-4xl uppercase ">
                        Because Every Heart Deserves
                    </h1>

                    <p className="lg:text-5xl sm:text-xl md:text-2xl max-w-3xl uppercase mb-2">
                        Happiness
                    </p>
                    <p className="uppercase lg:text-4xl sm:text-xl md:text-2xl max-w-3xl mb-10">
                        Choose HeartHacker Gifts
                    </p>
                </div>

            </div>
        </div>
    </>)
}
export default Herosection