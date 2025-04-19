import { Globe } from "lucide-react";

export default function VisitButton({
  url,
  label,
  marginTop = 0,
}: {
  url: string;
  label: string;
  marginTop?: number;
}) {
  return (
    <a
      className={`flex items-center gap-1 w-fit text-xs text-gray-800 font-semibold border border-gray-500/50 rounded-md shadow-sm bg-gray-200 hover:bg-gray-300 transition duration-200 px-2 py-1 cursor-pointer ${
        marginTop ? `mt-${marginTop}` : ""
      }`}
      href={url}
      target="_blank"
    >
      <Globe size={14} />
      {label}
    </a>
  );
}
