import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Preview({ markdown }: { markdown: string }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-red-500 p-4">
      <Markdown
        remarkPlugins={[remarkGfm]}
        className="h-full w-full rounded-lg bg-purple-500 p-4"
      >
        {markdown}
      </Markdown>
    </div>
  );
}
