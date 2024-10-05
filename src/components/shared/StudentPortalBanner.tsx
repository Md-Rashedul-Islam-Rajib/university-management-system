import image from "../../../public/image.png"
import TimeAndDate from "./TimeAndDate";


const StudentPortalBanner = () => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-[#1e40af] to-[#5775d6] shadow-lg] py-10">
      <div className="flex justify-between mx-6 md:mx-10 lg:mx-16">
        <div className="flex flex-col justify-between text-white">
          <div className="py-3">
            <TimeAndDate />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome back, John!</h1>
            <p>Always stay updated in your student portal</p>
          </div>
        </div>
        <div>
            <img className="h-60 " src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StudentPortalBanner;
