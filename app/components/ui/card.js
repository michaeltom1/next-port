import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
const Card = ({ title, description }) => {
  return (
    <>
      <div className="card-container">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">Description: {description}</p>
        <Link href={"#"} className="card-icon-container">
          <LuArrowUpRight className="card-icon" />
        </Link>
      </div>
    </>
  );
};

export default Card;
