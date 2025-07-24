import bg from "../../assets/images/services/Container2.png";
import logo from "../../assets/images/Logo.png";
export default function Footer() {
  return (
    <div className="relative w-full h-[500px] mt-2">
      <img src={bg} alt="bg" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
        <img src={logo} alt="logo" width={90} className="my-6 pt-3" />
        <h1 className="text-5xl font-bold mb-4">
          Let us Bring your Ideas to Life in the Digital World.
        </h1>
        <p className="text-md w-3/4">
          No matter which services you choose, we are committed to delivering
          exceptional results that exceed your expectations. Our
          multidisciplinary team works closely together to ensure seamless
          collaboration and a unified vision for your digital product.
        </p>
        <button className="bg-[#9dff00] text-black rounded-sm text-xl px-6 py-4 mt-8">
          Start project
        </button>
      </div>
    </div>
  );
}
