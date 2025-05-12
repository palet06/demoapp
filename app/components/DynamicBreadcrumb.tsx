// components/Breadcrumb.tsx
"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function DynamicBreadcrumb() {
  const pathname = usePathname()

  // Path'i parçala ve boş stringleri filtrele
  const pathParts = pathname.split('/').filter(Boolean)

  // Önceki path'leri oluştur (birikimli olarak)
  const pathLinks = pathParts.map((part, index) => {
    return {
      name: part.charAt(0).toUpperCase() + part.slice(1),
      href: '/' + pathParts.slice(0, index + 1).join('/')
    }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathLinks.map((item, index) => (
          <BreadcrumbItem key={item.href} >
            <BreadcrumbLink asChild>
              <Link href={item.href}>
                {item.name}
              </Link>
            </BreadcrumbLink>
            {index < pathLinks.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
