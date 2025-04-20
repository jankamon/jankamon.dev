export default function StackBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center w-fit text-xs border border-gray-800 rounded-md shadow-sm bg-gray-800 px-1">
      {label}
    </div>
  );
}
