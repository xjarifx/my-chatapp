import Link from "next/link";

export default function Chat() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header - 15% height */}
      <div className="border-base-300 bg-base-200 flex h-[15%] items-center justify-between border-b px-6">
        <p className="text-3xl font-bold">Chat room</p>
        <Link href="/">
          <button className="btn btn-secondary">Logout</button>
        </Link>
      </div>

      {/* Chat area - 85% height */}
      <div className="bg-base-100 flex h-[85%] flex-col">
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-4"></div>

        {/* Input area */}
        <div className="border-base-300 bg-base-200 border-t p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="input input-bordered focus:ring-primary flex-1  focus:ring-2 focus:outline-none"
            />
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
