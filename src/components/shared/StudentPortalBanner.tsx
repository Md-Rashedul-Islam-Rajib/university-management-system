import image from "../../../public/image.png"
import TimeAndDate from "./TimeAndDate";


const StudentPortalBanner = () => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-[#1e40af] to-[#5775d6] shadow-lg] py-10">
      <div className="flex justify-between mx-6 md:mx-10 lg:mx-20">
        <div className="flex flex-col justify-between text-white">
          <div>
            <TimeAndDate />
          </div>
          <div className="font-orbitron">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome back, John!</h1>
          </div>
        </div>
        <div>
            <img className="h-40 " src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StudentPortalBanner;
