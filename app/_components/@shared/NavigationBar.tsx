import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavigationBar({
  children,
}: Readonly<{ children?: never }>) {
  return (
    <nav className="flex justify-between items-center h-16 px-4 py-2 border-b fixed w-full bg-stone-50 dark:bg-stone-950">
      <Link href="/" className="font-bold text-xl">
        the.hiring
      </Link>
      <div className="flex items-center gap-2">
        {children}

        <ThemeSwitcher />
      </div>
    </nav>
  );
}
