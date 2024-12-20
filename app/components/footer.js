import { footerLinks } from "../constant/data";
import Button from "./ui/Button";
import { logo } from "../assets/asset";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="footer-parent-container">
        <div className="footer-container1">
          <Link href={"#hero"}>
            <Image src={logo} alt="logo" className="logo" />
          </Link>
          <h3 className="footer-text">&copy; 2024 Michael Tom</h3>
        </div>
        <div className="footer-icons">
          {footerLinks.map((item) => (
            <Button href={item.url} key={item.id}>
              <item.Icon fontSize={22} />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
