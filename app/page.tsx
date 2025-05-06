// this will be a welcome page for the app, and and a simple button click will take the user to the auth page
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-5xl font-bold">Welcome user</p>
      <Link href="/loginPage" className="btn btn-primary mt-6">
        Login
      </Link>
    </div>
  );
}
