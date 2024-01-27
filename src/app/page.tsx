"use client";

import { useState } from "react";
import Input from "@/components/input";
import Preview from "@/components/preview";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  return (
    <main className="h-screen flex flex-col md:flex-row items-center">
      <div className="h-2/3 w-full md:h-screen md:w-2/3">
        <Preview markdown={markdown} />
      </div>
      <div className="h-1/3 w-full md:h-screen md:w-1/3">
        <Input setMarkdown={setMarkdown} />
      </div>
    </main>
  );
}
