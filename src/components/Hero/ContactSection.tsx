"use client";

import { useStore } from "@/store";
import { JSX, useEffect, useState } from "react";
import { SiWhatsapp, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

interface Contact {
  name: string;
  detail: string;
}

interface ContactIconsProps {
  contacts?: Contact[];
}

const ContactIcons = ({ contacts = [] }: ContactIconsProps) => {
  const { darkMode } = useStore();
  const [ iconColor, setIconColor] = useState("black")

  useEffect(() => {
    if (darkMode) {
      setIconColor("white")
    } else {
      setIconColor("black")
    }
  }, [darkMode])

  const iconMap: { [key: string]: JSX.Element } = {
    Whatsapp: <SiWhatsapp className="h-8 w-8" color={iconColor}/>,
    LinkedIn: <SiLinkedin className="h-8 w-8" color={iconColor}/>,
    Github: <SiGithub className="h-8 w-8" color={iconColor}/>,
    Gmail: <SiGmail className="h-8 w-8" color={iconColor}/>,
  };

  const generateHref = (contact: Contact) => {
    const { name, detail } = contact;

    if (name === "Whatsapp") {
      const phoneNumber = detail.replace(/\D/g, ""); // Remove non-numeric characters
      return `https://wa.me/${phoneNumber}`;
    } else if (name === "Gmail") {
      return `mailto:${detail}`;
    } else if (name === "LinkedIn" || name === "Github") {
      return detail.startsWith("http") ? detail : `https://${detail}`;
    } else if (/^\+?[0-9]+$/.test(detail)) {
      return `tel:${detail}`; // Handle phone numbers
    } else {
      return detail; // Default fallback
    }
  };

  return (
    <div className="flex space-x-4 mt-6 justify-center">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={generateHref(contact)}
          className="hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconMap[contact.name] || <span className="text-sm">No Icon</span>}
        </a>
      ))}
    </div>
  );
};

export default ContactIcons;
