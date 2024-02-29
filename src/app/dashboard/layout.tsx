import SideNav from "@/app/ui/dashboard/Sidenav";
import NavLinks from "../ui/dashboard/NavLink";
import AcmeLogo from "../ui/dashboard/AcmeLogo";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <div className="md:h-[100px] h-[100px] relative rounded">
          <Image
            src="/hero-desktop.png"
            layout="fill"
            objectFit="cover"
            priority
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <AcmeLogo className="absolute bottom-[8px] left-[8px]"/>
        </div>
        <SideNav className="h-[calc(100vh-100px)]"/>
      </div>
      <div className="flex-grow h-screen p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
