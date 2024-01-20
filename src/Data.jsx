import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";


export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "teacher",
    link: "Teacher",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];



export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Web Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Web Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Digital Marketing",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Mobile Application",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "React Native",
    title: "Complete Reactt Native Course",
    rating: 4.2,
    participants: 500,
    price: 12999,
  },
  {
    id: 2,
    image: courses2,
    category: "MERN STACK Development",
    title: "FullStack Web Development Course",
    rating: 4.3,
    participants: 700,
    price: 19999,
  },
  {
    id: 3,
    image: courses3,
    category: "FARM STACK ",
    title: "FullStack Web Development Course",
    rating: 4.4,
    participants: 300,
    price: 21999,
  },
  {
    id: 4,
    image: courses4,
    category: "Web Design",
    title: "UI/UX Design Course",
    rating: 4.0,
    participants: 600,
    price: 7999,
  },
  {
    id: 5,
    image: courses5,
    category: "REACTjs",
    title: "Complete Reactjs Course",
    rating: 4.1,
    participants: 500,
    price: 12999,
  },
  {
    id: 6,
    image: courses6,
    category: "Flutter",
    title: " Complete Flutter Course",
    rating: 4.3,
    participants: 500,
    price: 13999,
  },
  {
    id: 7,
    image: courses7,
    category: "Digital Marketing",
    title: "Digital Marketing Course",
    rating: 4.5,
    participants: 400,
    price: 6999,
  },
  {
    id: 8,
    image: courses8,
    category: "IT SOLUTIONS",
    title: "Complete IT SOLUTIONS",
    rating: 4.9,
    participants: 500,
    price: 3999,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is SmartIntern?",
  },
  {
    id: 2,
    title: "What can I learn from SmartIntern?",
  },
  {
    id: 3,
    title: "Can I teach on SmartIntern?",
  },
  {
    id: 4,
    title: "What is included in my SmartIntern membership?",
  },
];
