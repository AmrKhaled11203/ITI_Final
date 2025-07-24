import icon1 from "../../assets/images/services/Icon.png";
import icon2 from "../../assets/images/services/Icon (1).png";
import icon3 from "../../assets/images/services/Icon (2).png";

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-8 border border-[#88888833]">
        <img src={icon1} alt="icon" className="my-8" />
        <h2 className="text-4xl mb-4">Design</h2>
        <p className="max-w-[470px]">
          At Squareup, our design team is passionate about creating stunning,
          user-centric designs that captivate your audience and elevate your
          brand. We believe that great design is not just about aesthetics; it's
          about creating seamless and intuitive user experiences.
        </p>
        <button className="mt-20 mb-8 bg-[#262626] px-20 py-2 rounded-lg text-lg w-full hover:bg-[#4f4f4f] duration-150">
          Learn More
        </button>
      </div>

      <div className="p-8 border border-[#88888833]">
        <img src={icon2} alt="icon" className="my-8" />
        <h2 className="text-4xl mb-4">Engineering</h2>
        <p className="max-w-[470px]">
          Our engineering team combines technical expertise with a passion for
          innovation to build robust and scalable digital solutions. We leverage
          the latest technologies and best practices to deliver high-performance
          applications tailored to your specific needs.
        </p>
        <button className="mt-20 mb-8 bg-[#262626] px-20 py-2 rounded-lg text-lg w-full hover:bg-[#4f4f4f] duration-150">
          Learn More
        </button>
      </div>

      <div className="p-8 border border-[#88888833]">
        <img src={icon3} alt="icon" className="my-8" />
        <h2 className="text-4xl mb-4 min-w-[400px]">Project Management</h2>
        <p className="max-w-[470px] h-[145px]">
          Our experienced project management team ensures that your projects are
          delivered on time, within budget, and according to your
          specifications. We follow industry-standard methodologies and employ
          effective communication and collaboration tools to keep you informed
          throughout the development process.
        </p>
        <button className="mt-20 mb-8 bg-[#262626] px-20 py-2 rounded-lg text-lg w-full hover:bg-[#4f4f4f] duration-150">
          Learn More
        </button>
      </div>
    </div>
  );
}
