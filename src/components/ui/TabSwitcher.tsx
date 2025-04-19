export default function TabSwitcher({
  isWorkTab,
  setIsWorkTab,
}: {
  isWorkTab: boolean;
  setIsWorkTab: (value: boolean) => void;
}) {
  return (
    <div className="flex w-full h-9 items-center justify-around text-sm font-medium p-1 rounded-lg bg-gray-800">
      <button
        className={`w-full h-full rounded-sm cursor-pointer ${
          isWorkTab ? "bg-gray-950" : "text-gray-400"
        }`}
        onClick={() => setIsWorkTab(true)}
      >
        Work
      </button>
      <button
        className={`w-full h-full  rounded-sm cursor-pointer ${
          !isWorkTab ? "bg-gray-950" : "text-gray-400"
        }`}
        onClick={() => setIsWorkTab(false)}
      >
        Education
      </button>
    </div>
  );
}
