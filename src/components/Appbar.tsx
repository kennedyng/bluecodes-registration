"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

const Appbar = () => {
  return (
    <Navbar rounded className="shadow-sm py-4">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Child Reg sys
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" as={Link}>
          Child Registration
        </Navbar.Link>
        <Navbar.Link as={Link} href="/view">
          Child List View
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Appbar;
