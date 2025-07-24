import bg1 from "../../assets/images/services/Container2.png";
export default function Hero() {
  return (
    <div className="relative w-full h-[300px]">
      <img src={bg1} alt="bg" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>
      </div>
    </div>
  );
}
