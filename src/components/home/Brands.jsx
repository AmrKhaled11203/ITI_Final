import logo1 from "../../assets/images/services/Logo (1).png";
import logo2 from "../../assets/images/services/Logo.png";
import logo3 from "../../assets/images/services/Vector.png";
import logo4 from "../../assets/images/services/Vector (1).png";
import logo5 from "../../assets/images/services/Vector (2).png";
import logo6 from "../../assets/images/services/Vector (3).png";

export default function Brands() {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-12 px-4">
      <img src={logo1} alt="logo1" className="h-12 object-contain" />
      <img src={logo2} alt="logo2" className="h-12 object-contain" />
      <img src={logo3} alt="logo3" className="h-12 object-contain" />
      <img src={logo4} alt="logo4" className="h-12 object-contain" />
      <img src={logo5} alt="logo5" className="h-12 object-contain" />
      <img src={logo6} alt="logo6" className="h-12 object-contain" />
    </div>
  );
}
