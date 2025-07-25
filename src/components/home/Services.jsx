import icon1 from "../../assets/images/services/Icon.png";
import icon2 from "../../assets/images/services/Icon (1).png";
import icon3 from "../../assets/images/services/Icon (2).png";

const services = [
  {
    icon: icon1,
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
  },
  {
    icon: icon2,
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
  },
  {
    icon: icon3,
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
  },
];

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-8 border border-[#88888833] flex flex-col justify-between h-full">
      <div>
        <img src={icon} alt={`${title}`} className="my-8" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">{title}</h2>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
      <button className="mt-10 bg-[#262626] px-8 py-3 rounded-lg text-lg text-white w-full hover:bg-[#4f4f4f] duration-150">
        Learn More
      </button>
    </div>
  );
}

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
