import Input from "@/components/input";
import Preview from "@/components/preview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col md:flex-row items-center">
      <div className="h-1/2 w-full md:h-screen md:w-1/2">
        <Preview />
      </div>
      <div className="h-1/2 w-full md:h-screen md:w-1/2">
        <Input />
      </div>
    </main>
  );
}
