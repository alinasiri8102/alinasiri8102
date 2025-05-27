"use client";

import { IconCopyright } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const date = new Date().getFullYear();
    setYear(date);
  }, []);
  return (
    <footer className="flex-h">
      <IconCopyright />
      <p>CopyRight {year}</p>
    </footer>
  );
};

export default Footer;
