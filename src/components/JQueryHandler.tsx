"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import $ from "jquery";

export default function JQueryHandler() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Page changed:", pathname);

    // Wait for DOM update
    setTimeout(() => {
      const headerHeight = $(".site-header").height();
      if (headerHeight !== undefined) {
        $(".space-top").css("padding-top", headerHeight);
      }
    }, 100);
  }, [pathname]); // Runs every time the page changes

  return null;
}
