import Image from "next/image";
import { lusitana } from "./ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AcmeLogo from "./ui/dashboard/AcmeLogo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-2">
      <div className="md:h-[200px] h-[100px] relative rounded">
        <Image
          src="/hero-desktop.png"
          layout="fill"
          objectFit="cover"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <AcmeLogo className="absolute bottom-[8px] left-[8px]" size="large" />
      </div>
      <div className="flex-col md:flex md:flex-row h-[calc((100vh-108px)-1rem)] md:h-[calc((100vh-208px)-1rem)] mt-[8px]">
        <div className="animatecss animatecss-fadeInLeft w-full md:w-2/5 p-[50px] bg-gray-100 rounded h-full flex flex-col justify-center">
          <p className={`max-w-[280px] ${lusitana.className}`}>
            <span className="font-bold">Welcome to Acme. </span>This is example
            for the{" "}
            <span className="text-blue-700 underline">
              <a href="#">Next.js Learn Course</a>
            </span>
            , brought to you by Vervel.
          </p>
          <button className="animatecss animatecss-pulse animatecss-infinite bg-[#2e6eea] mt-[16px] self-start rounded px-4 py-[4px] text-white hover:opacity-80 hover:underline">
            <Link href="/login" className="flex justify-center items-center ">
              Login <ArrowRightIcon className="ml-2" width={20} />
            </Link>
          </button>
        </div>
        <div className="animatecss animatecss-fadeInRight w-full md:w-3/5 h-full relative rounded">
          <Image
            src="/content.jpg"
            layout="fill"
            objectFit="contain"
            alt="Screenshot of the dashboard project showing mobile version"
          />
          <p
            className={`${lusitana.className} max-w-[300px] p-[4px] border text-center text-xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 `}
          >
            Believe that life is worth living and your belief will help create
            the fact. – William James
          </p>
        </div>
      </div>
    </main>
  );
}
