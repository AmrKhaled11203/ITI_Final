import bg from "../../assets/images/services/Hero Section (1).png";
import HeaderSpan from "./HeaderSpan";
export default function Header() {
  return (
    <div className="relative w-full h-[500px]">
      <img src={bg} alt="bg" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-5xl font-bold mb-4 max-w-lg">
          A Digital Product Studio that will Work
        </h1>
        <HeaderSpan />
        <div className="flex gap-4 mt-8">
          <button className="bg-[#191919] p-4 w-40 text-xl rounded-xl">
            Our Works
          </button>
          <button className="bg-[#9EFF00] p-4 w-40 text-xl rounded-xl text-black">
            Contact Us
          </button>
        </div>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#191919] text-white p-3 rounded-full shadow-lg">
          Trusted By 250+ Companies
        </span>
      </div>
    </div>
  );
}
