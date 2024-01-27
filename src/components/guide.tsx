import CustomMarkdown from "./custommarkdown";

export default function Guide() {
  const code = `
~~~python 
print("Hello world!") 
~~~
`;
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-white bg-blue-400 gap-8 p-6">
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold text-3xl md:text-5xl">Guide</span>
        <span className="text-sm">You can only currently use:</span>
      </div>
      <div className="w-full sm:w-[580px] flex flex-col rounded-lg font-mono text-[9px] sm:text-sm text-left nm-flat-blue-400 gap-4 p-4">
        <div className="w-full flex flex-row items-center justify-center">
          <span className="w-1/2">**This is a bold text**</span>
          <CustomMarkdown className="w-1/2">
            **This is a bold text**
          </CustomMarkdown>
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <span className="w-1/2">*This is an italic text*</span>
          <CustomMarkdown className="w-1/2">
            *This is an italic text*
          </CustomMarkdown>
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <span className="w-1/2 flex flex-col">
            <span>~~~python</span>
            <span>print(&quot;Hello world!&quot;)</span>
            <span>~~~</span>
          </span>
          <CustomMarkdown className="w-1/2">{code}</CustomMarkdown>
        </div>
      </div>
    </div>
  );
}
