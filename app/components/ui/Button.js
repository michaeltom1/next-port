"use client";
import Link from "next/link";
import { LuSendHorizontal } from "react-icons/lu";

const Button = ({ children, noLink, href = "#", Icon, className }) => {
  return (
    <>
      {!noLink ? (
        <Link href={href} className={`btn ${className}`} target="_blank">
          {children} {Icon && <LuSendHorizontal />}
        </Link>
      ) : (
        <button className="btn">{children}</button>
      )}
    </>
  );
};

export default Button;
