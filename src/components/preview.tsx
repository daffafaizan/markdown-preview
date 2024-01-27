import CustomMarkdown from "./custommarkdown";

export default function Preview({ markdown }: { markdown: string }) {
  return (
    <div className="h-2/3 w-full md:h-screen md:w-2/3 flex flex-col items-center justify-center px-6 pt-6 pb-3 md:py-8 md:pl-8 md:pr-4">
      {markdown ? (
        <CustomMarkdown className="no-scrollbar h-full w-full rounded-2xl whitespace-pre-line break-all overflow-y-auto bg-neutral-100 nm-flat-neutral-100 text-gray-500 p-4">
          {markdown}
        </CustomMarkdown>
      ) : (
        <div className="no-scrollbar h-full w-full flex flex-col items-center justify-center rounded-2xl whitespace-pre-line break-all overflow-y-auto bg-neutral-100 text-xl text-gray-400 nm-flat-neutral-100 p-4">
          <span>No content</span>
        </div>
      )}
    </div>
  );
}
