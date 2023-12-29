import { ModeToggle } from "../ui/mode-toggle";

export default function Header() {
  return (
    <div className="py-8 px-4 shadow flex items-center justify-between md:px-12 dark:border-[0.5px] dark:border-b-white">
      <h1 className="font-bold md:text-2xl">Where in the world ?</h1>
      <ModeToggle />
    </div>
  );
}
