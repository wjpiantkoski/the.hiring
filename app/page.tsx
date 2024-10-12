import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Website</h1>

      <aside>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </aside>
    </main>
  );
}
