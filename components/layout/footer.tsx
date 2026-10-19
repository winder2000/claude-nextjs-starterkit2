import Link from "next/link";
import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code2 className="h-4 w-4" />
          <span>© 2026 Next Startkit. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">
            소개
          </Link>
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            대시보드
          </Link>
        </nav>
      </div>
    </footer>
  );
}
