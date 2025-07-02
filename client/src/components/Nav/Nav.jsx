import { NavLink, useLocation } from "react-router-dom";
import s from "./Nav.module.css";
import { useEffect, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

const links = [
  {
    id: 1,
    text: "About",
    to: "/",
  },
  {
    id: 2,
    text: "Projects",
    to: "/projects",
  },
  {
    id: 3,
    text: "Testimonials",
    to: "/testimonials",
  },
  {
    id: 4,
    text: "Work",
    to: "/work",
  },
  {
    id: 5,
    text: "Contact",
    to: "/contact",
  },
  {
    id: 6,
    text: "Admin",
    to: "/admin",
  },
];

const Nav = () => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(location.pathname);

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location.pathname]);
  return (
    <LayoutGroup>
      <div className={s.back}>
        <nav className={s.nav}>
          <div className={s.container}>
            <div className={s.links}>
              {links.map((link) => {
                const isSelected = selectedLink === link.to;

                return (
                  <div key={link.id} className={s.li}>
                    <NavLink
                      to={link.to}
                      className={`${s.base} ${
                        isSelected ? s.active : s.inactive
                      }`}
                      onClick={() => setSelectedLink(link.to)}
                    >
                      {link.text}
                    </NavLink>
                    {isSelected && (
                      <div className={s.underline}>
                        <motion.div
                          layoutId="nav-dot"
                          className={s.dot}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </LayoutGroup>
  );
};

export default Nav;
