export default function Landing() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-gray-500">
        <span className="font-semibold text-xl md:text-3xl">
          React Markdown Previewer
        </span>
        <span>
          by{" "}
          <span className="font-semibold text-black">
            dmf<span className="text-cyan-500">.</span>
          </span>
        </span>
      </div>
    </div>
  );
}
