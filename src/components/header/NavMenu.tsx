'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

interface MenuItem {
  title: string;
  url: string;
  subMenu?: { title: string; url: string }[];
}

export default function NavMenu() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    fetch("/json/menu.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data.menu));
  }, []);

  const handleMenuClick = (menuTitle: string) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };


  return (
    <ul className="main-menu rest">
      {menuData.map((menu, index) => (
        <li
          key={index} 
          className={clsx({ 'hoverd': hoveredMenu && hoveredMenu !== menu.title })}
          onMouseEnter={() => setHoveredMenu(menu.title)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className="o-hidden">
            <div
              className={clsx("link cursor-pointer dmenu", { 'dopen': activeMenu === menu.title })}
              onClick={() => handleMenuClick(menu.title)}
            >
              <Link href={menu.url}>
                <span className="fill-text" data-text={menu.title}>{menu.title}</span>
              </Link>
              {menu.subMenu && <i></i>}
            </div>
          </div>

          {/* Submenu */}
          {menu.subMenu ? (
            <div className={clsx("sub-menu", { 'sub-open': activeMenu === menu.title })}>
              <ul>
                {menu.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.url} className="sub-link">
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            ) : (
            // If no submenu, just render the normal menu item
            <></>
            )}
        </li>
      ))}
    </ul>
  );
}