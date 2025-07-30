"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building, Home, Users, Wrench, FileText, BarChart3, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function SidebarNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      dis:false,
      icon: <Home className="h-4 w-4" />,
    },
    {
      title: "Properties",
      href: "/dashboard/properties",
        dis:false,
      icon: <Building className="h-4 w-4" />,
    },
    {
      title: "Tenants",
      href: "/dashboard/tenants",
        dis:false,
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Maintenance",
      href: "/dashboard/maintenance",
        dis:true,
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      title: "Documents",
      href: "/dashboard/documents",
        dis:true,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
        dis:false,
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
        dis:true,
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === item.href && "bg-accent text-accent-foreground",
          )}
           style={{
          pointerEvents: item.dis ? 'none' : 'auto',
          opacity: item.dis ? 0.5 : 1,
          cursor: item.dis ? 'not-allowed' : 'pointer',
        }}
        >
          {item.icon}
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}
