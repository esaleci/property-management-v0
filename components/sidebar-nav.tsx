import Link from "next/link"
import { Building, Home, Users, Wrench, FileText, BarChart3, Settings } from "lucide-react"

export function SidebarNav() {
  return (
    <nav className="space-y-1">
      <Link
        href="/"
        className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <Home className="h-4 w-4" />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/properties"
        className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <Building className="h-4 w-4" />
        <span>Properties</span>
      </Link>
      <Link
        href="/tenants"
        className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <Users className="h-4 w-4" />
        <span>Tenants</span>
      </Link>
      <Link
        href="/maintenance"
        className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <Wrench className="h-4 w-4" />
        <span>Maintenance</span>
      </Link>
      <Link
        href="/documents"
        className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <FileText className="h-4 w-4" />
        <span>Documents</span>
      </Link>
      <Link
        href="/reports"
        className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <BarChart3 className="h-4 w-4" />
        <span>Reports</span>
      </Link>
      <Link
        href="/settings"
        className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <Settings className="h-4 w-4" />
        <span>Settings</span>
      </Link>
    </nav>
  )
}
