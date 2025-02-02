import { JSX } from "react";
import { SiWhatsapp, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

interface Contact {
  name: string;
  detail: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  Whatsapp: <SiWhatsapp className="h-8 w-8" />,
  LinkedIn: <SiLinkedin className="h-8 w-8" />,
  Github: <SiGithub className="h-8 w-8" />,
  Gmail: <SiGmail className="h-8 w-8" />,
};

interface ContactIconsProps {
  contacts?: Contact[]; // Make it optional
}

const ContactIcons = (
  { contacts = [] }: ContactIconsProps // Default to an empty array
) => (
  <div className="flex space-x-4 mt-6 justify-center">
    {contacts.map((contact, index) => (
      <a
        key={index}
        href={
          contact.detail.startsWith("http")
            ? contact.detail
            : `mailto:${contact.detail}`
        }
        className="hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {iconMap[contact.name] || <span className="text-sm">No Icon</span>}{" "}
      </a>
    ))}
  </div>
);

export default ContactIcons;
