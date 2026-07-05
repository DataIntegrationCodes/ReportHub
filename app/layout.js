import './globals.css';

export const metadata = {
  title: 'Weekly Updates',
  description: 'A running log of progress, newest first.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
