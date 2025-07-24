import React from 'react';
import WorkCard from './WorkCard';
import '../works/Works_Style.css';
import arrowIcon from '../../assets/images/work_images/Arrow.png';


const projects = [
  {
    mainHeading: 'E-Commerce Platform for Fashion Hub',
    image: require('../../assets/images/work_images/Chic Boutique.png'),
    linkText: 'Chic Boutique Project',
    linkHref: 'https://chictheboutique.com',
    title: 'Chic Boutique',
    arrowImg: arrowIcon,
    description: 'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased sales and customer satisfaction. ',

  },
  {
    mainHeading: 'Mobile App for Food Delivery Service',
    image: require('../../assets/images/work_images/HungryBites.png'),
    linkText: 'HungryBites Project',
    linkHref: 'https://www.hungrybites.com',
    title: 'HungryBites',
    arrowImg: arrowIcon,
    description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency. ',
  },
  {
    mainHeading: 'Booking and Reservation System for Management',
    image: require('../../assets/images/work_images/EventMasters.png'),
    linkText: 'EventMasters Project',
    linkHref: 'https://www.eventmasters.com',
    title: 'EventMasters',
    arrowImg: arrowIcon,
    description: 'EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.',
  },
  {
    mainHeading: 'Custom Software for Workflow Automation',
    image: require('../../assets/images/work_images/ProTech Solutions.png'),
    linkText: 'ProTech Solutions Project',
    linkHref: 'https://www.protechsolutions.com',
    title: 'ProTech Solutions',
    arrowImg: arrowIcon,
    description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
  },
  {
    mainHeading: 'Web Portal for Real Estate Listings',
    image: require('../../assets/images/work_images/Dream Homes Realty.png'),
    linkText: 'Dream Homes Realty Project',
    linkHref: 'https://dreamhome-realty.com',
    title: 'Dream Homes Realty',
    arrowImg: arrowIcon,
    description: 'Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.',
  },
  {
    mainHeading: 'Mobile App for Fitness Tracking',
    image: require('../../assets/images/work_images/FitLife Tracker.png'),
    linkText: 'FitLife Tracker Project',
    linkHref: 'https://fitlifesa.com/',
    title: 'FitLife Tracker',
    arrowImg: arrowIcon,
    description: 'FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.',
  },
  {
    mainHeading: 'Custom Software for Supply Chain Management',
    image: require('../../assets/images/work_images/Global Logistics Solutions.png'),
    linkText: 'Global Logistics Solutions Project',
    linkHref: 'https://gogloballogistics.com',
    title: 'Global Logistics Solutions',
    arrowImg: arrowIcon,
    description: 'Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.',
  },
  {
    mainHeading: 'Educational Platform for Online Learning',
    image: require('../../assets/images/work_images/EduConnect.png'),
    linkText: 'EduConnect Project',
    linkHref: 'https://www.educonnect.com.au',
    title: 'EduConnect',
    arrowImg: arrowIcon,
    description: 'EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.',
  },
  {
    mainHeading: 'Mobile App for Travel Planning',
    image: require('../../assets/images/work_images/WanderWise.png'),
    linkText: 'WanderWise Project',
    linkHref: 'https://www.wanderwiseai.com',
    title: 'WanderWise',
    arrowImg: arrowIcon,
    description: 'WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.satisfaction. ',
  },
  {
    mainHeading: 'Custom Software for E-commerce Platform',
    image: require('../../assets/images/work_images/ConnectCRM.png'),
    linkText: 'ConnectCRM Project',
    linkHref: 'https://www.thehungrybites.com',
    title: 'ConnectCRM',
    arrowImg: arrowIcon,
    description: 'ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.',
  },
];

const WorkCardsGrid = () => {
  return (
    <section className="sub-section-2">
      {projects.map((project, index) => (
        <div className="whole-card-container" key={index}>
          <WorkCard
            image={project.image}
            title={project.title}
            description={project.description}
            mainHeading={project.mainHeading}
            linkText={project.linkText}
            linkHref={project.linkHref}
            arrowImg={project.arrowImg}
          />

        </div>
      ))}
    </section>
  );
};


export default WorkCardsGrid;
