export default function Input({
  setTitle,
  setMarkdown,
}: {
  setTitle: any;
  setMarkdown: any;
}) {
  return (
    <div className="h-1/3 w-full md:h-screen md:w-1/3 flex flex-col items-center justify-center px-6 pb-6 pt-3 md:py-8 md:pr-8 md:pl-4">
      <div className="h-full w-full flex flex-col items-center justify-center bg-neutral-100 rounded-2xl nm-flat-neutral-100 gap-4 p-4 md:gap-6 md:p-6">
        <input
          className="no-scrollbar w-full rounded-2xl bg-neutral-100 overflow-y-auto nm-inset-neutral-100 text-gray-500 placeholder:text-gray-400 p-4"
          placeholder="Title"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <textarea
          className="no-scrollbar h-full w-full rounded-2xl bg-neutral-100 overflow-y-auto nm-inset-neutral-100 text-gray-500 placeholder:text-gray-400 p-4"
          placeholder="Content"
          onChange={(e) =>
            setMarkdown(String(e.currentTarget.value).replace(/\\n/g, "\n"))
          }
        />
      </div>
    </div>
  );
}
