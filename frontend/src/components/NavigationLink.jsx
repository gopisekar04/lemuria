import * as React from "react";
import { useNavigate } from "react-router-dom";

export const NavigationLink = ({ text }) => {
  const navigate = useNavigate()
  return <div navigate className="cursor-pointer lg: mt-3 hover:underline ">{text}</div>
}