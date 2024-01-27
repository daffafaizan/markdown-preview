export default function Input({ setMarkdown }: { setMarkdown: any }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-blue-500 p-4">
      <textarea
        className="h-full w-full rounded-lg p-4"
        onChange={(e) =>
          setMarkdown(String(e.currentTarget.value).replace(/\\n/g, "\n"))
        }
      />
    </div>
  );
}
