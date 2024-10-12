import Link from "next/link";

export default function NavigationBar({
  children,
}: Readonly<{ children?: never }>) {
  return (
    <nav className="flex justify-between items-center h-16 px-4 py-2 border-b">
      <Link href="/" className="font-bold text-xl">
        the.hiring
      </Link>
      <div>{children}</div>
    </nav>
  );
}
