import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Preview({ markdown }: { markdown: string }) {
  return (
    <div className="h-2/3 w-full md:h-screen md:w-2/3 flex flex-col items-center justify-center px-6 pt-6 pb-3 md:py-8 md:pl-8 md:pr-4">
      <Markdown
        className="no-scrollbar h-full w-full rounded-2xl whitespace-pre-line break-all overflow-y-auto bg-neutral-100 nm-flat-neutral-100 p-4"
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props as any;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                className="rounded-lg"
                language={match[1]}
                style={xonokai}
              >
                {children}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
