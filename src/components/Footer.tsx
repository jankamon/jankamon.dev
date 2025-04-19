import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-16 text-xs font-medium text-gray-400">
      <p>Crafting code since 2016</p>
      <Socials />
    </footer>
  );
}
