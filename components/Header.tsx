import Link from "next/link";
import logoImg from "@/public/logo.png";
import { PRIMARY_COLOR } from "@/app/theme";

export default function Header() {
  return (
    <header style={{color: "white",  padding: "10px 50px", backgroundColor: PRIMARY_COLOR}} className="section-min-width">
      <div className="section-content-max-width mx-auto flex justify-between items-center">
        <img style={{maxHeight: "40px"}} src={logoImg.src} alt="Logo"></img>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Servicios</Link>
            </li>
            <li>
              <Link href="/about">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}