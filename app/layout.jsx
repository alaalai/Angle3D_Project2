import './globals.css';
import { Providers } from '../components/providers';

export const metadata = {
  title: 'Customize Product – كوستمايز برودكت',
  description: 'منصة SaaS عربية لإدارة نماذج 3D والمشاريع والفوترة.',
  generator: 'Next.js 14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-950 text-slate-100">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
