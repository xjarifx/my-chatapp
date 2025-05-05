export default function Chat() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header - 15% height */}
      <div className="border-base-300 bg-base-200 flex h-[15%] items-center justify-center border-b">
        <p className="text-3xl font-bold">Chat room</p>
      </div>

      {/* Chat area - 85% height */}
      <div className="bg-base-100 flex h-[85%] flex-col">
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Empty chat area - messages will appear here */}
          <div className="flex h-full items-center justify-center">
            <div className="text-base-content/50 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <p className="mt-2">No messages yet</p>
              <p className="text-sm">Start a conversation</p>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="border-base-300 bg-base-200 border-t p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="input input-bordered focus:ring-primary flex-1 rounded-full focus:ring-2 focus:outline-none"
            />
            <button className="btn btn-primary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
