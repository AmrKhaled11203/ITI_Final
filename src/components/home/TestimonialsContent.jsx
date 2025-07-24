// components/TestimonialsContent.jsx
import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./TestimonialsSection.css";
const testimonials = [
  {
    title:
      "SquareUp has been Instrumental in Transforming our Online Presence.",
    description:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    authorphoto: require("../../assets/images/Testimonials_photos/Profile.png"),
    authorname: "John Smith",
    authorposition: "CEO of Chic Boutique",
  },
  {
    title: "Working with SquareUp was a breeze.",
    description:
      "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
    authorphoto: require("../../assets/images/Testimonials_photos/Profile2.png"),
    authorname: "Sarah Johnson",
    authorposition: "Founder of HungryBites.",
  },
  {
    title:
      "SquareUp developed a comprehensive booking and reservation system for our event management company",
    description:
      "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients’ event experiences.",
    authorphoto: require("../../assets/images/Testimonials_photos/Profile3.png"),
    authorname: "Mark Thompson",
    authorposition: "CEO of EventMasters",
  },
  {
    title: "ProTech Solutions turned to SquareUp to automate our workflow",
    description:
      "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp’s expertise and professionalism have made them a trusted technology partner.",
    authorphoto: require("../../assets/images/Testimonials_photos/Profile4.png"),
    authorname: "Laura Adams",
    authorposition: "COO of ProTech Solutions.",
  },
  {
    title:
      "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
    description:
      "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp’s expertise in the real estate industry is unmatched.",
    authorphoto: require("../../assets/images/Testimonials_photos/Profile5.png"),
    authorname: "Michael Anderson",
    authorposition: "Founder of Dream Homes Realty.",
  },
  {
    title:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    description:
      "SquareUp’s team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
    authorphoto: require("../../assets/images/Testimonials_photos/Profile6.png"),
    authorname: "Emily Turner",
    authorposition: "CEO of FitLife Tracker",
  },
];

const TestimonialsContent = () => {
  return (
    <div className="TestimonialsSection-content">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialsContent;
