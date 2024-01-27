"use client";

import { useState } from "react";
import Input from "@/components/input";
import Preview from "@/components/preview";
import Landing from "@/components/landing";
import Guide from "@/components/guide";
import Footer from "@/components/footer";

export default function Home() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  return (
    <main>
      <Landing />
      <Guide />
      <div className="h-screen flex flex-col md:flex-row items-center">
        <Preview markdown={markdown} />
        <Input setTitle={setTitle} setMarkdown={setMarkdown} />
      </div>
      <Footer />
    </main>
  );
}
