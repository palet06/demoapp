"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type MenuItem = {
  title: string;
  href: string;
  items?: MenuItem[];
  active?: boolean;
};

const menuItems: MenuItem[] = [
  {
    title: "Başvuru Bilgileri",
    href: "#section-basvuru-bilgi",
    active: true,
    items: [
      { title: "Kişi Bilgileri", href: "#section-personel" },
      { title: "İletişim Bilgilleri", href: "#section-iletisim-bilgileri" },
      { title: "Pasaport Bilgileri", href: "#section-pasaport-bilgileri" },
      { title: "Eğitim Bilgileri", href: "#section-egitim-bilgileri" },
      { title: "Görev Bilgileri", href: "#section-gorev-bilgileri" },
      {
        title: "İşveren/Kurum Bilgileri",
        href: "#section-isveren-kurum-bilgileri",
      },
      { title: "Ek Bilgi ve Belgeler", href: "#section-belgeler" },
    ],
  },
  {
    title: "Değerlendirme İşlemi",
    href: "#section-degerlendirme-sonuc-islemi",
  },
];

export function SettingsSidebar() {
  const [activeSection, setActiveSection] = useState<string>("basvuru-bilgi");

  useEffect(() => {
    const sections = document.querySelectorAll('[id^="section-"]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Only process if it's a section link
    if (href.startsWith("#section-")) {
      const targetId = href.substring(1); // Remove the # character
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Scroll to the element with smooth behavior
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update active section
        setActiveSection(targetId);
      }
    }
  };

  return (
    <div className="sticky top-4 w-full">
      <nav className="flex flex-col space-y-1">
        {menuItems.map((item) => {
          const itemId = item.href.replace("#", "");
          const isActive = activeSection === itemId;

          return (
            <div key={item.title} className="space-y-1">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
                )}
              >
                {item.title}
              </a>
              {item.items?.map((subItem) => {
                const subItemId = subItem.href.replace("#", "");
                const isSubActive = activeSection === subItemId;

                return (
                  <a
                    key={subItem.title}
                    href={subItem.href}
                    onClick={(e) => handleNavClick(e, subItem.href)}
                    className={cn(
                      "flex items-center rounded-md pl-8 py-1.5 text-sm",
                      isSubActive
                        ? "bg-primary/5 text-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    {subItem.title}
                  </a>
                );
              })}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
