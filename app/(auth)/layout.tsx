import AuthIllustration from "../_assets/images/auth_illustration.svg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-full grid grid-cols-3">
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center">
        <Image src={AuthIllustration} alt="Authentication" />
      </div>
    </main>
  );
}
