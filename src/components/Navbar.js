'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaGlobe, FaCartShopping } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import clsx from 'clsx';

const links = [
  {
    name: 'Website',
    href: '#website',
    icon: FaGlobe
  },
  {
    name: 'Shop',
    href: '#shop',
    icon: FaCartShopping
  },
  {
    name: 'Social',
    href: '#social',
    icon: FaLink
  }
]

export default function BottomNavbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className='rounded-t-[20px] fixed bottom-0 w-full bg-neutral-200 z-10 py-3 md:hidden'>
      <div className="container px-12 flex justify-between items-center gap-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={clsx(
                'cursor-pointer text-xs flex flex-col justify-center text-neutral-600 items-center flex-1 rounded-full p-1 size-12 transition duration-300 hover:text-neutral-900 hover:bg-neutral-300',
                {
                  'bg-neutral-900 text-white hover:bg-neutral-900 hover:text-white': activeLink === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="text-sm">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}