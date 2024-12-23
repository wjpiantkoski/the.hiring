"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";

const menuItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Applications",
    link: "/applications",
  },
  {
    label: "Settings",
    link: "/settings",
  },
];

const NavigationBar = () => {
  const pathname = usePathname();
  const { isLoaded } = useAuth();

  return (
    <nav className="py-4 fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-4">
      <NavigationMenu className="max-w-[960px] mx-auto items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold mr-4">
          the.hiring
        </Link>

        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "bg-accent text-accent-foreground": pathname.startsWith(
                      item.link
                    ),
                  })}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        {!isLoaded && <Skeleton className="h-[28px] w-[28px] rounded-full" />}
        {isLoaded && <UserButton />}
      </NavigationMenu>
    </nav>
  );
};

export default NavigationBar;
