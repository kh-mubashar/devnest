// components/ui/sidebar.tsx

// Mark this file as a client component
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Analytics', href: '/dashboard/analytics' },
  { name: 'Feedback', href: '/dashboard/feedback' },
  { name: 'Products', href: '/dashboard/products' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r p-4 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6">FusionStack</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'px-3 py-2 rounded hover:bg-gray-100',
              pathname === link.href ? 'bg-gray-200 font-medium' : ''
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
