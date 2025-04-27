// components/Navbar.tsx
'use client';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100 border-b">
      <Link href="/(dashboard)/analytics">Analytics</Link>
      <Link href="/(dashboard)/feedback">Feedback</Link>
      <Link href="/(dashboard)/products">Products</Link>
    </nav>
  );
}
