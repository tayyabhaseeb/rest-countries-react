import { ModeToggle } from "../ui/mode-toggle";

export default function Header() {
  return (
    <div className="py-8 px-4 shadow flex items-center justify-between md:px-8">
      <h1 className="font-bold md:text-2xl">Where in the world ?</h1>
      <ModeToggle />
    </div>
  );
}
