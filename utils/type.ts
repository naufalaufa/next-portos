import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import TodosList from "../public/images/todolist.png";
import NaufalCommerce from "../public/images/naufal-commerce.png";
import { StaticImageData } from "next/image";

type NavLink = {
  id: number;
  name: string;
  href: string;
};

type TypeDescriptionOne = {
  id: number;
  name: string;
};

type SocialMedias = {
  id: number;
  name: string;
  icon: IconType;
  href: string;
};

type Projects = {
  id: number;
  image: string | StaticImageData;
  href: string;
  name: string;
  description: string;
};

type WorkExperiences = {
  id: number;
  date: string;
  company: string;
  role: string;
};

export const workexperiences: WorkExperiences[] = [
  {
    id: 1,
    role: "Front End Developer Internship",
    company: "Cretivox Broadcasting Network",
    date: "23 Desember 2023 - 24 Mei 2024",
  },
];

export const descs: TypeDescriptionOne[] = [
  {
    id: 1,
    name: "CODE",
  },
  {
    id: 2,
    name: "EAT",
  },
  {
    id: 3,
    name: "SLEEP",
  },
  {
    id: 4,
    name: "REPEAT",
  },
];

export const navlinks: NavLink[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Project",
    href: "/project",
  },
];

export const socialmedias: SocialMedias[] = [
  {
    id: 1,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/naufalaufa19/",
    icon: FaLinkedin,
  },
  {
    id: 2,
    name: "Github",
    href: "https://github.com/naufalaufa",
    icon: FaGithub,
  },
];

export const projects: Projects[] = [
  {
    id: 1,
    name: "Todo List React.js",
    image: TodosList,
    description:
      "this is a simple project that uses react.js and typescript and tailwindCSS for styling and use react toastify",
    href: "https://naufal-todo-ts.vercel.app/",
  },
  {
    id: 2,
    name: "Naufal E commerce",
    image: NaufalCommerce,
    description:
      "This project was created with the next.js tech stack for the front end, for authentication using the Clark library, for the backend using express.js and also node.js for creating the api (application programming interface)",
    href: "/",
  },
];
