import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
