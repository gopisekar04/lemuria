import * as React from "react";
import { NavigationLink } from "./NavigationLink";

const navLinks = ["Home", "Shop", "Learn", "About Us", "Contact Us"];

export const NavigationBar = () => (
  <nav className="ml-5 mt-5 lg:flex gap-7">
    {navLinks.map((link) => (
      <NavigationLink key={link} text={link} />
    ))}
  </nav>
);
