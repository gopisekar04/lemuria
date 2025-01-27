import * as React from "react";

export const FooterSection = ({ title, children }) => (
  <div className="flex-1 max-md:mb-5 max-md:flex-[0_0_100%] max-sm:mb-8">
    <div className="mb-5 text-sm text-black">{title}</div>
    {children}
  </div>
);