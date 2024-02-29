import React from "react";
import NavLinks from "./NavLink";

type Props = {
  className?: string;
};

export default function Sidenav({ className }: Props) {
  return (
    <div className={className}>
      <NavLinks />
    </div>
  );
}
