import React from "react";
import "./NavBar.scss";

export default function NavBar({ children }) {
  return <nav className="container">{children}</nav>;
}
