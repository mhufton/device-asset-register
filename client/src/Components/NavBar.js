import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
      <div className="flex flex-row justify-between align-center">
        <h1 className="text-2xl">Device Manager</h1>
        <NavLink to="/" className="text-xl">Home</NavLink>
      </div>
    )
}