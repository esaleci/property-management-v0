"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Building, Home, Users, Wrench, FileText, BarChart3, Settings, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Properties",
    href: "/dashboard/properties",
    dis:false,
    icon: <Building className="h-5 w-5" />,
  },
  {
    title: "Tenants",
    href: "/dashboard/tenants",
    dis:false,
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Maintenance",
    href: "#",
    dis:true,
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    title: "Documents",
    href: "#",
    dis:true,
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    dis:false,
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "#",
    dis:true,
    icon: <Settings className="h-5 w-5" />,
  },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 sm:w-72">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-lg font-semibold">
            <Building className="h-5 w-5" />
            PropertyManager
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
             
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:text-foreground",
              )}
               style={{
          pointerEvents: item.dis ? 'none' : 'auto',
          opacity: item.dis ? 0.5 : 1,
          cursor: item.dis ? 'not-allowed' : 'pointer',
        }}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
