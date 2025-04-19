const menuItems = [
  {
    name: "about me",
    href: "#about",
  },
  {
    name: "experience",
    href: "#experience",
  },
  {
    name: "projects",
    href: "#projects",
  },
  {
    name: "contact",
    href: "#contact",
  },
];

export default function Menu() {
  return (
    <menu className="sticky top-0 z-10 flex items-center justify-center w-full bg-gray-950/75 backdrop-blur-sm px-4 py-6">
      <ul className="flex gap-8 justify-start items-center">
        {menuItems.map((item, id) => (
          <li key={id}>
            <a
              href={item.href}
              className="text-md font-medium text-gray-400 hover:text-gray-200 transition duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </menu>
  );
}
