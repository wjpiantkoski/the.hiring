import SignupForm from "@/app/_components/auth/SignupForm";

export default function SignupPage() {
  return (
    <section className="flex flex-col w-80 space-y-4 p-4">
      <div className="flex flex-col">
        <p className="text-xl">Sign up</p>
        <h1 className="text-3xl font-bold">the.hiring</h1>
      </div>

      <SignupForm />
    </section>
  );
}
