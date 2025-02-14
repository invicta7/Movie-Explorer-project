import React from "react";
import FooterLinks from "./navLinks/FooterLinks";

const logos = [
  {
    name: "Netflix",
    src: "/Netflix.png",
    alt: "Netflix Logo",
    link: "https://www.netflix.com/ng/",
  },
  {
    name: "TMDB",
    src: "/Paramount.png",
    alt: "TMDB Logo",
    link: "https://www.netflix.com/ng/",
  },
  {
    name: "Hulu",
    src: "/HBO.png",
    alt: "Hulu Logo",
    link: "https://www.netflix.com/ng/",
  },
  {
    name: "Disney+",
    src: "/Disney.png",
    alt: "Disney+ Logo",
    link: "https://www.netflix.com/ng/",
  },
  {
    name: "Amazon Prime",
    src: "/WB.png",
    alt: "Amazon Prime Logo",
    link: "https://www.netflix.com/ng/",
  },
  {
    name: "Apple TV",
    src: "/Apple.png",
    alt: "Apple Tv Logo",
   
  },
  {
    name: "Amazon Prime",
    src: "/DC.png",
    alt: "Amazon Prime Logo",
 
  },
  {
    name: "AMC",
    src: "/AMC.png",
    alt: "AMC Logo",
   
  },
  {
    name: "Sony",
    src: "/Sony.png",
    alt: "Sony Logo",
   
  },
  {
    name: "Marvel",
    src: "/Marvel.png",
    alt: "Marvel Logo",
  
  },
];

const socialLinks = [
  { name: "Facebook", src: "/Facebook.png", link: "https://facebook.com" },
  { name: "Instagram", src: "/Instagram.png", link: "https://instagram.com" },
  { name: "LinkedIn", src: "/LinkedIn.png", link: "https://linkedin.com" },
  { name: "YouTube", src: "/YouTube.png", link: "https://youtube.com" },
  { name: "X", src: "/X.png", link: "https://x.com" },
];

const teamMembers = [  
  { name: "Busari Abdulhakem", src: "/Busaripreferred.jpeg" },
  { name: "Obong Uko", src: "/Obong1.jpeg" },
  { name: "Victor Iriemi", src: "/vIriemi.jpeg" },
  { name: "Tobi Egunjobi", src: "/Tobi.jpeg" },
  { name: "AbdulKabir", src: "/Kabir.jpeg" },
  { name: "Stephen Adebayo", src: "/Adebayo.jpeg" },
  { name: "Ojo Deborah", src: "/Ojo Deborah.jpeg" },
  {name: "Coker Olawale", src: "/Coker.jpeg"},
];

const navigationLinks = [
  { linkName: "Get the Omni App" },
  { linkName: "Help" },
  { linkName: "Site index" },
  { linkName: "Omni Pro" },
  { linkName: "Advertising" },
  { linkName: "Omni Developer" },
  { linkName: "Get the Jobs" },
  { linkName: "Privacy Policy" },
];

const Footer = () => {
  return (
    <footer className="bg-[#030A1B] text-white py-6 mt-10 px-4">
      <div className="container mx-auto flex flex-col items-center mt-30 gap-4 md:flex-wrap justify-start max-w-[1040px]">
        <h1 className="text-5xl font-bold mb-6">Studios</h1>
        <div className="flex mb-4 gap-12 flex-wrap justify-center items-center md:flex-wrap">
          {logos.map((logo, index) => {
            return (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-[160px] w-[160px] object-contain"
              />
            );
          })}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Meet the Team</h2>

        
        <div className=" md:w-full overflow-hidden flex justify-start mb-4 gap-2 sm:flex-wrap">

          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.src}
                alt={member.name}
                className="h-[140px] w-[140px] rounded-full object-cover"
              />
              <p className="text-sm mt-2">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-10 my-10 max-w-[1040px] flex-wrap">
          {navigationLinks.map((link, index) => (
            <FooterLinks key={index} {...link} />
          ))}
        </div>

        <div className="flex space-x-4 mb-4 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.src}
                alt={social.name}
                className="h-8 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Movie Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
