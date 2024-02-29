"use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/dashboard",
  },
  {
    name: "Invoices",
    icon: DocumentDuplicateIcon,
    href: "/dashboard/invoices",
  },
  {
    name: "Customers",
    icon: UserGroupIcon,
    href: "/dashboard/customers",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="relative h-full flex md:flex-col">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}

      <Link
        href={"/login"}
        className="md:absolute md:w-full bottom-4 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <ArrowRightEndOnRectangleIcon className="w-6" />
        <p className="hidden md:block">Sign out</p>
      </Link>
    </div>
  );
}
