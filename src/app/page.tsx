'use client'

import { useMediaQueries, useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMenu as MenuIcon } from "react-icons/io5";
import logo from "/logo.svg"

const navItems = [
  <a key="1" href="#">Home</a>,
  <a key="2" href="#">Services</a>,
  <a key="3" href="#">Locations</a>,
  <a key="4" href="#">About</a>,
  <a key="5" href="#">Contact</a>
]

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 1120px)')
  const [isClient, setIsClient] = useState (false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <a href="tel: 0422407129" className="bg-primary block text-white p-2 text-center w-screen">CALL DYLAN ON: <b>04 2240 7129</b></a>
      <main className="w-full max-w-[1120px] px-4">

        <header className="h-20 md:h28 flex space-b justify-between items-center py-4">
          <Image src={logo.src} alt="Chillmate Logo" width={0} height={0} id="logo" className="w-auto h-full" priority></Image>
          {isClient && !isSmallScreen && <nav className="flex gap-4">{navItems}</nav>}
          {isClient && isSmallScreen && <MenuIcon />}
        </header>
      </main>
    </>
  );
}
