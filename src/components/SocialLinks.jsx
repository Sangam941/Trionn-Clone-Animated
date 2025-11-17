import React from "react";
import gsap from "gsap";

const SocialLinks = () => {
  const links = [
    { name: "Dribbble", img: "/images/card2_files/dribble.svg" },
    { name: "LinkedIn", img: "/images/card2_files/linkedin.svg" },
    { name: "Instagram", img: "/images/card2_files/instagram.svg" },
    { name: "Behance", img: "/images/card2_files/behance.svg" },
    { name: "Facebook", img: "/images/card2_files/facebook.svg" },
  ];

  const handleHover = (e) => {
    const div = e.currentTarget;
    const img = div.querySelector("img");

    gsap.to(div, {
      scaleX: 1.2,
      transformOrigin: "center center",
      duration: 0.5,
    });

    gsap.to(img, {
      rotation: 360,
      duration: 2,
      ease: "power2.out",
    });
  };

  const handleLeave = (e) => {
    const div = e.currentTarget;
    const img = div.querySelector("img");

    gsap.to(div, {
      scaleX: 1,
      transformOrigin: "center center",
      duration: 2,
      ease: "power2.out",
    });

    gsap.to(img, {
      rotation: 360,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="w-full max-md:max-w-md mx-auto mt-10 px-56 max-md:px-4">
      {links.map((link, index) => (
        <div
          key={index}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="link flex items-center justify-between py-4 md:py-10 border-b border-gray-700 cursor-pointer"
        >
          <span className="text-lg font-medium md:text-5xl">{link.name}</span>
          <img
            src={link.img}
            alt={link.name}
            className="w-8 h-8 object-contain md:w-16 md:h-16"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
