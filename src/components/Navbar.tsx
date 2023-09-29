import { Link } from "react-router-dom";
import { Logo } from "../assets";

interface Link {
  title: string;
  href: string;
}

const Navbar = () => {
  const links: Link[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Try!",
      href: "/try",
    },
  ];

  return (
    <nav className="py-6 lg:px-14 px-8 flex items-center justify-between">
      <Link to="/">
        <img src={Logo} alt="Mentorium" width={200} height={200} />
      </Link>
      <ul className="flex items-center gap-5">
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.href} className={`hover:underline text-lg ${link.title === "Try!" ? "hover:no-underline ease-in-out duration-200 hover:bg-blue-800 py-3 px-4 bg-lime-500 text-white rounded-full" : ""}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
