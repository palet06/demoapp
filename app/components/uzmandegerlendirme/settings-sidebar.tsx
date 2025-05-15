"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type MenuItem = {
  title: string
  href: string
  items?: MenuItem[]
  active?: boolean
}

const menuItems: MenuItem[] = [
  {
    title: "Basic Settings",
    href: "#section-basic-settings",
    active: true,
    items: [
      { title: "Authentication", href: "#authentication" },
      { title: "Email", href: "#email" },
      { title: "Password", href: "#password" },
      { title: "Social Sign In", href: "#social-sign-in" },
      { title: "Single Sign-On(SSO)", href: "#sso" },
      { title: "Two-Factor Auth(2FA)", href: "#2fa" },
    ],
  },
  {
    title: "Advanced Settings",
    href: "#advanced-settings",
    items: [
      { title: "Preferences", href: "#preferences" },
      { title: "Appearance", href: "#appearance" },
      { title: "Notifications", href: "#notifications" },
      { title: "Address", href: "#section-address" },
    ],
  },
  {
    title: "External Services",
    href: "#external-services",
    items: [
      { title: "Manage API", href: "#manage-api" },
      { title: "Integrations", href: "#integrations" },
      { title: "Delete Account", href: "#section-delete-account" },
    ],
  },
]

export function SettingsSidebar() {
  const [activeSection, setActiveSection] = useState<string>("basic-settings")

  useEffect(() => {
    const sections = document.querySelectorAll('[id^="section-"]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setActiveSection(sectionId)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Only process if it's a section link
    if (href.startsWith("#section-")) {
      const targetId = href.substring(1) // Remove the # character
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Scroll to the element with smooth behavior
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Update active section
        setActiveSection(targetId)
      }
    }
  }

  return (
    <div className="sticky top-4 w-full">
      <nav className="flex flex-col space-y-1">
        {menuItems.map((item) => {
          const itemId = item.href.replace("#", "")
          const isActive = activeSection === itemId

          return (
            <div key={item.title} className="space-y-1">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  isActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                )}
              >
                {item.title}
              </a>
              {item.items?.map((subItem) => {
                const subItemId = subItem.href.replace("#", "")
                const isSubActive = activeSection === subItemId

                return (
                  <a
                    key={subItem.title}
                    href={subItem.href}
                    onClick={(e) => handleNavClick(e, subItem.href)}
                    className={cn(
                      "flex items-center rounded-md pl-8 py-1.5 text-sm",
                      isSubActive ? "bg-primary/5 text-primary" : "hover:bg-muted",
                    )}
                  >
                    {subItem.title}
                  </a>
                )
              })}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
