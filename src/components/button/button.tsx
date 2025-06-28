import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  styleButton?: "arTop" | "arBottom";
}

const ButtonSite: React.FC<ButtonProps> = ({ text, onClick, href, styleButton="arTop" }) => {
  const baseStyles = "btn-site";

  const styleButtons = {
    arTop: "ar-top",
    arBottom: "ar-bottom"
  };

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${styleButtons[styleButton]}`}>
        <span className="btn-t">{text}</span> 
        <span className="btn-ic">
            <i className="fal fa-arrow-right"></i>
        </span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${styleButtons[styleButton]}`}>
        <span className="btn-t">{text}</span> 
        <span className="btn-ic">
            <i className="fal fa-arrow-right"></i>
        </span>
    </button>
  );
};

export default ButtonSite;
