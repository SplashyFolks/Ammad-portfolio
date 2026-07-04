import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ammad | Full-Stack Web Developer & UI/UX Designer',
  description: 'Ammad is a full-stack developer and UI/UX designer blending modern web development with polished design.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
