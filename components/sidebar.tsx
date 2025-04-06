import Link from "next/link"
import {
  Compass,
  GraduationCapIcon as Graduation,
  Home,
  Library,
  PlaySquare,
  TrendingUpIcon as Trending,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  activePage: string
}

export default function Sidebar({ activePage }: SidebarProps) {
  return (
    <aside className="hidden w-64 border-r p-4 md:block">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-red-600">
          <PlaySquare className="h-6 w-6 fill-red-600" />
          <span>LearnTube Navigator</span>
        </Link>
      </div>

      <nav className="space-y-1">
        <Link
          href="/"
          className={`flex items-center gap-3 rounded-md p-2 text-sm font-medium ${
            activePage === "home" ? "bg-accent" : "text-muted-foreground hover:bg-accent"
          }`}
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/trending"
          className={`flex items-center gap-3 rounded-md p-2 text-sm font-medium ${
            activePage === "trending" ? "bg-accent" : "text-muted-foreground hover:bg-accent"
          }`}
        >
          <Trending className="h-5 w-5" />
          <span>Trending</span>
        </Link>
        <Link
          href="/library"
          className={`flex items-center gap-3 rounded-md p-2 text-sm font-medium ${
            activePage === "library" ? "bg-accent" : "text-muted-foreground hover:bg-accent"
          }`}
        >
          <Library className="h-5 w-5" />
          <span>Library</span>
        </Link>
        <Link
          href="/explore"
          className={`flex items-center gap-3 rounded-md p-2 text-sm font-medium ${
            activePage === "explore" ? "bg-accent" : "text-muted-foreground hover:bg-accent"
          }`}
        >
          <Compass className="h-5 w-5" />
          <span>Explore</span>
        </Link>
      </nav>

      <div className="mt-8">
        <h3 className="mb-2 text-sm font-semibold">Exam Preparation</h3>
        <div className="space-y-1">
          <Link
            href="/profile"
            className="flex items-center justify-between rounded-md p-2 text-sm font-medium text-muted-foreground hover:bg-accent"
          >
            <div className="flex items-center gap-3">
              <Graduation className="h-5 w-5" />
              <span>Exam Preferences</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  )
}

