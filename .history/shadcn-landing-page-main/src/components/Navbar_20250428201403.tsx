import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { Menu, Phone } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoActplan } from "./LogoActplan";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#about",
    label: "Quem Somos",
  },
  {
    href: "#services",
    label: "Serviços",
  },
  {
    href: "#howItWorks",
    label: "Processo",
  },
  {
    href: "#footer",
    label: "Contato",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[0.5px] border-muted-foreground/20 top-0 z-40 w-full bg-white dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-8 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex items-center gap-2"
            >
              <img 
                src={logoActplanSvg} 
                alt="ACTPlan Logo" 
                className="h-8 text-primary dark:text-white"
              />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl flex items-center gap-2">
                    <img 
                      src={logoActplanSvg} 
                      alt="ACTPlan Logo" 
                      className="h-8 text-primary dark:text-white"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                      {label}
                    </a>
                  ))}
                  <Button className="w-full mt-4">
                    Agendar Consultoria
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-6">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className="text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <Button size="sm">
              Agendar Consultoria
            </Button>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
