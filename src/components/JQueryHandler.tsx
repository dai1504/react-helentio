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
      $(".space-top").css("padding-top", $(".site-header").height());
    }, 100);
  }, [pathname]); // Runs every time the page changes

  return null;
}
