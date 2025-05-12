'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex px-4 py-2 justify-between shadow-md">
        <div>
            <Link href="/">
            <Image src="/logo.jpg" width={70} height={50} alt="logo"/>
            </Link>
        </div>

        <div className="relative self-center">
          <Drawer direction="left" dismissible={true} open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DrawerTrigger asChild>
              <Menu className="cursor-pointer" onClick={toggleMenu} />
            </DrawerTrigger>
            <DrawerContent className="left-0 right-auto bg-white border-none max-w-xs">
              <DrawerHeader className="flex flex-row justify-between items-center">
                <DrawerTitle>Abbas<span className='text-3xl text-green-400'>.</span></DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <div className="px-4 py-2">
                <Link href="/" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/Shop" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                <Link href="/Services" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link href="/contact" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Button size={"lg"} variant="destructive">Contact Us</Button>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">Close Menu</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
    </header>
  )
}

export default Header