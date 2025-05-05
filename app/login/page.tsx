// here user will put their name to join the chatroom
import Link from "next/link";

export default function login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-5xl font-bold">One step away</p>
      <input
        type="text"
        placeholder="Enter your name"
        className="input input-bordered mt-6 w-full max-w-xs"
      />
      <Link href="/chat" className="btn btn-primary mt-6">
        Join
      </Link>
    </div>
  );
}
