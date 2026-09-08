import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tern — Big ideas. Lighter wings.',
  metadataBase: new URL('https://iaredr.github.io/tern-dispatch/'),
  alternates: { canonical: 'https://iaredr.github.io/tern-dispatch/' },
  description:
    'Tern is a lightweight open-source Codex skill. Your main AI chooses when to delegate to Luna, sets the reasoning effort, and checks the results.',
  icons: { icon: '/tern-dispatch/tern.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
