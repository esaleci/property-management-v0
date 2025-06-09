import Link from "next/link"
import { Building } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/" className="flex items-center space-x-2">
        <Building className="h-6 w-6" />
        <span className="font-bold hidden sm:inline-block">PropertyManager</span>
      </Link>
      <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Dashboard
        </Link>
        <Link
          href="/properties"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Properties
        </Link>
        <Link
          href="/tenants"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Tenants
        </Link>
        <Link
          href="/maintenance"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Maintenance
        </Link>
      </nav>
    </div>
  )
}
