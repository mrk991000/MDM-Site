import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl" aria-label="Main navigation">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                <TailcastLogo />
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl">
                MDM
              </div>
            </div>
          </a>
        </motion.div>

        {/* Links Container (Right-aligned) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
        

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 w-full bg-bgDark1 z-50 items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10"
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl leading-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
