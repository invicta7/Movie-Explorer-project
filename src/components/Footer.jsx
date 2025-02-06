import React from "react";

const logos = [
  { name: "Netflix", src: "/Netflix.png", alt: "Netflix Logo" },
  { name: "TMDB", src: "/Paramount.png", alt: "TMDB Logo" },
  { name: "Hulu", src: "/HBO.png", alt: "Hulu Logo" },
  { name: "Disney+", src: "/Disney.png", alt: "Disney+ Logo" },
  { name: "Amazon Prime", src: "/WB.png", alt: "Amazon Prime Logo" },
  { name: "Apple TV", src: "/Apple.png", alt: "Apple Tv Logo" },
  { name: "Amazon Prime", src: "/DC.png", alt: "Amazon Prime Logo" },
  { name: "AMC", src: "/AMC.png", alt: "AMC Logo" },
  { name: "Sony", src: "/Sony.png", alt: "Sony Logo" },
  { name: "Marvel", src: "/Marvel.png", alt: "Marvel Logo" }
];

const socialLinks = [
  { name: "Facebook", src: "/icons/facebook.png", link: "https://facebook.com" },
  { name: "Instagram", src: "/icons/instagram.png", link: "https://instagram.com" },
  { name: "LinkedIn", src: "/icons/linkedin.png", link: "https://linkedin.com" },
  { name: "YouTube", src: "/icons/youtube.png", link: "https://youtube.com" },
  { name: "X", src: "/icons/x.png", link: "https://x.com" }
];

const teamMembers = [
  { name: "Obong", src: "/images/Obong.png" },
  { name: "Busari", src: "/images/Busari.png" },
  { name: "Victor Iriemi", src: "/images/OluwaDeborah.png" },
  { name: "Tobi", src: "/images/Tobi.png" },
  { name: "AbdulKabir", src: "/images/AbdulKabir.png" },
  { name: "Shevs", src: "/images/Shev.png" },
  { name: "OluwaDeborah", src: "/images/Others.png" },
];

const Footer = () => {
  return (
    <footer className="bg-[#030A1B] text-white py-6 mt-14">
      <div className="container mx-auto flex flex-col items-center mt-30 gap-4">
      <h1 className="text-5xl font-bold mb-6">Studios</h1>
        {Array.from({ length: Math.ceil(logos.length / 5) }, (_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-6 mb-4 gap-10">
            {logos.slice(rowIndex * 5, rowIndex * 5 + 5).map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-[160px] w-[160px] object-contain"
              />
            ))}
          </div>
        ))}

<h2 className="text-lg font-bold mt-6 mb-4">Meet the Team</h2>
        <div className="flex space-x-6 mb-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={member.src} alt={member.name} className="h-16 w-16 rounded-full object-cover" />
              <p className="text-sm mt-2">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 mb-4">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.src} alt={social.name} className="h-8 w-auto object-contain" />
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Movie Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

