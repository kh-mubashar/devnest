// app/layout.tsx
import { Navbar } from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'FusionStack',
  description: 'Your AI-Powered Dev Productivity Suite',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
