export default function Preview({ markdown }: { markdown: string }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-red-500 p-4">
      <div className="h-full w-full rounded-lg bg-purple-500 p-4">
        {markdown}
      </div>
    </div>
  );
}
