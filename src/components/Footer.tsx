import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-16 p-4 text-xs font-medium text-gray-400 mt-24">
      <p>Crafting code since 2016</p>
      <Socials />
    </footer>
  );
}
