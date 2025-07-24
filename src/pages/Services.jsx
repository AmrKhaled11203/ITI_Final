import Card from "../components/services/Card";
import Header1 from "../components/services/Header1";
import Hero from "../components/services/Hero";
import icon1 from "../assets/images/services/icons/Icon.png";
import icon2 from "../assets/images/services/icons/2.png";
import icon3 from "../assets/images/services/icons/3.png";
import icon4 from "../assets/images/services/icons/4.png";
import icon5 from "../assets/images/services/icons/5.png";
import icon6 from "../assets/images/services/icons/6.png";
import icon7 from "../assets/images/services/icons/7.png";
import icon8 from "../assets/images/services/icons/8.png";
import icon9 from "../assets/images/services/icons/9.png";
import icon10 from "../assets/images/services/icons/10.png";
import icon11 from "../assets/images/services/icons/11.png";
import icon12 from "../assets/images/services/icons/12.png";
import icon13 from "../assets/images/services/icons/Icon-0.png";
import icon14 from "../assets/images/services/icons/Icon-1.png";
import icon15 from "../assets/images/services/icons/Icon-2.png";
import icon16 from "../assets/images/services/icons/Icon-3.png";
import icon17 from "../assets/images/services/icons/Icon-4.png";
import icon18 from "../assets/images/services/icons/Icon-5.png";
import icon19 from "../assets/images/services/icons/Icon-6.png";
import icon20 from "../assets/images/services/icons/Icon-7.png";
import icon21 from "../assets/images/services/icons/Icon-8.png";
import icon22 from "../assets/images/services/icons/Icon-9.png";
import icon23 from "../assets/images/services/icons/Icon-10.png";
import icon24 from "../assets/images/services/icons/Icon-11.png";
import icon25 from "../assets/images/services/icons/Icon-12.png";
import icon26 from "../assets/images/services/icons/Icon-13.png";
import icon27 from "../assets/images/services/icons/Icon-14.png";
import icon28 from "../assets/images/services/icons/Icon-15.png";
import icon29 from "../assets/images/services/icons/Icon-16.png";
import icon30 from "../assets/images/services/icons/Icon-17.png";
import icon31 from "../assets/images/services/icons/Icon-18.png";
import icon32 from "../assets/images/services/icons/Icon-19.png";
import icon33 from "../assets/images/services/icons/Icon-20.png";
import icon34 from "../assets/images/services/icons/Icon-21.png";
import icon35 from "../assets/images/services/icons/Icon-22.png";
import icon36 from "../assets/images/services/icons/Icon-23.png";
import Footer from "../components/services/Footer";
export default function Services() {
  return (
    <div className="max-w-[80%] mx-auto">
      <Hero />
      <div className="mt-20">
        <Header1
          header="Design"
          para="At Squareup, our design team is passionate about creating stunning, user centric designs that captivate your audience and elevate your brand. We believe    that great design is not just about aesthetics, it's about creating seamless and intuitive user experiences"
          button="Our design services include:"
        />
        <div className="w-full mt-10s">
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">User Experience (UX) Design</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon={icon1}
              desc={`User Research and Persona\nDevelopment`}
            />
            <Card
              icon={icon2}
              desc={`Information Architecture and\nWireframing`}
            />
            <Card
              icon={icon3}
              desc={`Interactive Prototyping and\nUser Testing`}
            />
            <Card icon={icon4} desc={`UI Design and Visual Branding`} />
          </div>
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">User Interface (UI) Design</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon={icon5}
              desc={`Intuitive and Visually Appealing\nInterface Design`}
            />
            <Card icon={icon6} desc={`Custom Iconography and\nIllustration`} />
            <Card
              icon={icon7}
              desc={`Typography and Color Palette\nSelection`}
            />
            <Card
              icon={icon8}
              desc={`Responsive Design for Various\nDevices`}
            />
          </div>
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">Branding and Identity</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon={icon9}
              desc={`Logo Design and Visual Identity\nDevelopment`}
            />
            <Card icon={icon10} desc={`Brand Strategy and Positioning`} />
            <Card icon={icon11} desc={`Brand Guidelines and Style Guides`} />
            <Card
              icon={icon12}
              desc={`Marketing Collateral Design\n(Brochures, Business Cards, etc.)`}
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Header1
          header="Engineering"
          para="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
          button="Our engineering services include:"
        />
        <div className="w-full mt-10s">
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">Web Development</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon={icon13}
              desc={`Front-End Development (HTML,\n CSS, JavaScript)`}
            />
            <Card
              icon={icon14}
              desc={`Back-End Development (PHP,\nPython, Ruby)`}
            />
            <Card
              icon={icon15}
              desc={`Content Management System\n(CMS) Development (WordPress,\nDrupal)`}
            />
            <Card
              icon={icon16}
              desc={`E-Commerce Platform\nDevelopment (Magento, Shopify)`}
            />
          </div>
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">Mobile App Development</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon={icon17}
              desc={`Native iOS and Android App\nDevelopment`}
            />
            <Card
              icon={icon18}
              desc={`Cross-Platform App Development\n(React Native, Flutter)`}
            />
            <Card
              icon={icon19}
              desc={`App Prototyping and UI/UX Design\nIntegration`}
            />
            <Card
              icon={icon20}
              desc={`App Testing, Deployment, and\nMaintenance`}
            />
          </div>
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">Custom Software Development</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card icon={icon21} desc={`Enterprise Software Development  `} />
            <Card icon={icon22} desc={`Custom Web Application\nDevelopment`} />
            <Card
              icon={icon23}
              desc={`Integration with Third-Party APIs\nand Systems`}
            />
            <Card
              icon={icon24}
              desc={`Legacy System Modernization and\nMigration`}
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Header1
          header="Project Management"
          para="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
          button="Our project management services include:"
        />
        <div className="w-full mt-10s">
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">Project Planning and Scoping</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card icon={icon25} desc={`Requirements Gathering and\nAnalysis`} />
            <Card
              icon={icon26}
              desc={`Project Roadmap and Timeline\nDevelopment`}
            />
            <Card
              icon={icon27}
              desc={`Resource Allocation and Task\nAssignment`}
            />
            <Card
              icon={icon28}
              desc={`Risk Assessment and Mitigation\nStrategies`}
            />
          </div>
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">Agile Development</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card icon={icon29} desc={`Iterative Development and Sprints`} />
            <Card
              icon={icon30}
              desc={`Scrum or Kanban Methodology\nImplementation`}
            />
            <Card icon={icon31} desc={`Regular Progress Updates and\nDemos`} />
            <Card
              icon={icon32}
              desc={`Continuous Improvement and\nFeedback Incorporation`}
            />
          </div>
          <div className="mb-10 mt-10 rounded border-x border-[#88888833]">
            <h1 className="text-2xl pl-6 ">Quality Assurance and Testing</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card icon={icon33} desc={`Test Planning and Execution`} />
            <Card icon={icon34} desc={`Functional and Usability Testing`} />
            <Card icon={icon35} desc={`Performance and Security Testing`} />
            <Card icon={icon36} desc={`Bug Tracking and Issue Resolution`} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
