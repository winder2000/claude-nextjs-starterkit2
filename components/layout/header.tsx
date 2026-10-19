"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Code2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/dashboard", label: "대시보드" },
];

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 flex h-14 items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Code2 className="h-5 w-5" />
          <span>Next Startkit</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="테마 전환"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* 모바일 메뉴 */}
          <Sheet>
            <SheetTrigger
              className="md:hidden inline-flex items-center justify-center size-8 rounded-lg hover:bg-muted transition-colors"
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>메뉴</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
