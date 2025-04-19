import { socials } from "./data/socials";

export default function Socials() {
  return (
    <div className="flex gap-4">
      {socials.map((social, id) => {
        const Icon = social.icon;

        return (
          <a
            key={id}
            className="opacity-70 hover:opacity-100 transition duration-200"
            href={social.href}
            target="_blank"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
