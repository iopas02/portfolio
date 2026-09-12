import './globals.css';

export const metadata = {
  title: 'Charles Daniel B. Abuzo | Full Stack Developer',
  description:
    'Full Stack Developer specializing in Laravel, React, Next.js, and modern JavaScript. Building scalable web applications and SaaS platforms.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-dark text-zinc-100">{children}</body>
    </html>
  );
}
