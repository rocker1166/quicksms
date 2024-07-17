"use client"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";
 function Nav2() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Learning Tools"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const path = usePathname();
  const router = useRouter();
  return (
    
 <nav className="fixed top-0 w-full border-b-2 z-10  border-blue-950 border-[] backdrop-blur-xl ">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-5xl text-white font-semibold"><Link href='/'>🤖</Link> </span>
      <div className="flex space-x-4 text-2xl align-middle text-white">
        <Link href="/" className={path === "/" ? "active" : ""}>Home</Link>
        <Link className={path === "/topic/dashboard/notes" ? "active" : ""}  href="/topic/dashboard/notes">About</Link>
        <Link className={path === "/topic/dashboard/youtube" ? "active" : ""} href="/topic/dashboard/youtube">Docs</Link>
       
      </div>
    </div>
  </div>
</nav>

  )
}

export default Nav2