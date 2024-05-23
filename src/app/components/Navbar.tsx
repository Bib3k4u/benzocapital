"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="fixed z-10 backdrop-blur-lg text-white bg-transparent top-0 w-full h-24 flex items-center justify-between px-4 md:px-24">
      <div className="left text-2xl tracking-wider font-mono font-extrabold">
        <div>Benzo</div>
        <div className="text-center">Capital</div>
      </div>
      <div className="right hidden md:flex space-x-8 font-semibold text-lg tracking-wider font-mono">
        <Link href="/">Home</Link>
        <Link href="/about">About+</Link>
        <Link href="/solution">Solution+</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <button className="md:hidden text-white focus:outline-none" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        ref={sidebarRef}
        className={`fixed z-20 inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-[#152234] text-white font-semibold text-lg w-64 p-5 space-y-4`}
      >
        <div className="flex justify-between">
          <div className="left text-2xl tracking-wider font-mono font-extrabold">
            <div>Benzo</div>
            <div className="text-center">Capital</div>
          </div>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-10 space-y-4">
          <Link href="/" className="block" onClick={closeSidebar}>Home</Link>
          <Link href="/about" className="block" onClick={closeSidebar}>About+</Link>
          <Link href="/solution" className="block" onClick={closeSidebar}>Solution+</Link>
          <Link href="/news" className="block" onClick={closeSidebar}>News</Link>
          <Link href="/contact" className="block" onClick={closeSidebar}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
